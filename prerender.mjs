import { createServer as createViteServer } from 'vite';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Minimal browser globals so the DS IIFE bundle and react-dom don't crash in Node
globalThis.window = globalThis;
Object.defineProperty(globalThis, 'navigator', { value: { userAgent: '' }, configurable: true, writable: true });
const makeEl = () => ({
  setAttribute: () => {},
  removeAttribute: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  style: {},
  tagName: 'DIV',
});
globalThis.document = {
  body: makeEl(),
  createElement: () => makeEl(),
  createElementNS: () => makeEl(),
  createTextNode: () => ({}),
  addEventListener: () => {},
  removeEventListener: () => {},
  getElementById: () => null,
  querySelector: () => null,
  querySelectorAll: () => [],
};

async function prerender() {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
    optimizeDeps: { entries: [] },
    resolve: {
      alias: [
        // Redirect the DS entry to SSR stubs so we don't load the IIFE bundle
        { find: /\/ds\.js$/, replacement: resolve(__dirname, 'ds.ssr.js') },
      ],
    },
  });

  try {
    const { render } = await vite.ssrLoadModule('/entry-server.jsx');
    const appHtml = render('/');

    const template = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8');
    const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    writeFileSync(resolve(__dirname, 'dist/index.html'), html);
    console.log('✓ Prerendered dist/index.html');
  } finally {
    await vite.close();
  }
}

prerender().catch((e) => {
  console.error('Prerender failed:', e);
  process.exit(1);
});
