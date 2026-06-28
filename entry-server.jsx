import React from 'react';
// Landing.jsx relies on a global React (set by main.jsx in browser; set here for SSR)
globalThis.React = React;
import { renderToString } from 'react-dom/server';
import rrd from 'react-router-dom';
const { StaticRouter, Routes, Route } = rrd;
import LandingPage from './Landing';

export function render(url = '/') {
  return renderToString(
    React.createElement(
      StaticRouter,
      { location: url },
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: '/', element: React.createElement(LandingPage) })
      )
    )
  );
}
