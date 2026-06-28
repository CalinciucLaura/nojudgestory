// No Judge Story — Secțiune de acces anticipat (pre-register)
import { Input as PrInput, Button as PrButton, AvatarStack as PrAvatarStack } from './ds';

const PR_AVATARS = [1, 2, 3, 4].map((n) => `assets/avatar-${n}.jpg`);

const PR_BENEFITS = [
  {
    title: 'Obține titlu de fondatoare',
    body: 'Un statut permanent în comunitate, pentru că ai fost aici de la început.',
  },
  {
    title: '5 invitatii de access in platforma',
    body: 'Tu decizi care dintre prietenele tale intră alături de tine ',
  },
  {
    title: 'Acces garantat la lansare',
    body: 'Faci deja parte ca fondatoare, ulterior tu decizi catre cine oferi invitatiile',
  },
];

/* ── icons ── */
function PrSpark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l1.9 5.6L19.5 10.5 13.9 12.4 12 18l-1.9-5.6L4.5 10.5 10.1 8.6 12 3z"
        stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}
function PrLock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="2.2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function PrCheck() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.6"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── story / social-proof panel ── */
function PrStoryPanel() {
  return (
    <aside className="pr-story">
      <div className="pr-story__img" />
      <div className="pr-story__scrim" />
      <div className="pr-story__content">
        <span className="pr-eyebrow pr-eyebrow--light">Experiențe reale · anonime</span>
        <p className="pr-quote">
          „Am scris ceva ce nu spusesem nimănui. Pentru prima dată,
          nu m-am simțit <em>judecată</em>.”
        </p>
        <div className="pr-story__foot">
            <strong>180+</strong> femei sunt deja pe listă
        </div>
      </div>
    </aside>
  );
}

/* ── form ── */
function PrForm({ onDone, initialEmail = '' }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState(initialEmail);
  const [touched, setTouched] = React.useState(false);

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const showErr = touched && !validEmail;

  const submit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!validEmail) return;
    const params = new URLSearchParams({ email: email.trim(), name: name.trim() });
    fetch('https://script.google.com/macros/s/AKfycbxbgkcv1-BX6voL2rozO_y9qd4t4Yjtn2yOPm8GCgV71YwYNmYOoAwVMTUyilWNZunU-A/exec?' + params, { mode: 'no-cors' })
      .catch(() => {});
    onDone(name.trim());
  };

  return (
    <form className="pr-form" onSubmit={submit} noValidate>
      <span className="pr-pill">
        <i className="pr-dot" /> Lista de acces anticipat
      </span>

      <h3 className="pr-title">
       Vreau să fac parte din comunitate ca <em>scriitoare/cititoare</em>
      </h3>

      <ul className="pr-benefits">
        {PR_BENEFITS.map((b) => (
          <li className="pr-benefit" key={b.title}>
            <span className="pr-benefit__ic"><PrSpark /></span>
            <span className="pr-benefit__text">
              <strong>{b.title}</strong>
              <span>{b.body}</span>
            </span>
          </li>
        ))}
      </ul>

        <PrInput
          label="Email"
          type="email"
          placeholder="tu@exemplu.ro"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          error={showErr ? 'Introdu o adresă de email validă ca să-ți păstrăm locul.' : ''}
        />

      <button type="submit" className="pr-cta-btn">
        <span className="pr-cta-btn__shimmer" aria-hidden="true" />
        Vreau acces anticipat
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <p className="pr-trust">
        <PrLock /> Fără spam. Te anunțăm doar la lansare.
      </p>
    </form>
  );
}

/* ── success / referral ── */
function PrSuccess({ name }) {
  const basePosition = React.useMemo(() => 12000 + Math.floor(Math.random() * 900) + 120, []);
  const [invited, setInvited] = React.useState(0);
  const [copied, setCopied] = React.useState(false);
  const STEP = 60;

  const position = Math.max(48, basePosition - invited * STEP);
  const slug = (name ? name.toLowerCase().replace(/[^a-z]/g, '') : '') || 'tu';
  const refLink = 'nojudgestory.ro/lista?ref=' + slug + '24';

  const invite = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('https://' + refLink).catch(() => {});
    }
    setInvited((v) => v + 1);
    setCopied(true);
    setTimeout(() => setCopied(false), 1900);
  };

  return (
    <div className="pr-success">
      <div className="pr-success__badge" aria-hidden="true"><PrCheck /></div>

      <span className="pr-pill">
        <i className="pr-dot" /> Ești pe listă
      </span>

      <h3 className="pr-title">
        Gata!<em>Ți-am păstrat locul.</em>
      </h3>
      <p className="pr-lede">
        Vei fi printre primele care intră când deschidem porțile.
      </p>
    </div>
  );
}

/* ── section ── */
function PreRegisterSection({ initialEmail = '' }) {
  const [done, setDone] = React.useState(false);
  const [name, setName] = React.useState('');
  const finish = (n) => { setName(n); setDone(true); };

  return (
    <section className="pr-band" id="acces-anticipat">
      <div className="pr-inner">
        <div className="pr-glow pr-glow--a" />
        <div className="pr-glow pr-glow--b" />

        <div className="pr-head">
          <span className="pr-eyebrow pr-eyebrow--brand">Acces anticipat</span>
          <h2 className="pr-headline">
            Ne pregătim de lansare
            și vrem ca tu să fii <em>cu noi de la început</em>
          </h2>
          <p className="pr-sub">
            Dupa lansare, comunitatea nu mai e accesibilă oricui. Intri doar dacă cineva din interior te invită.
          </p>
        </div>

        <div className="pr-card">
          <PrStoryPanel />
          <div className="pr-panel">
            {done ? <PrSuccess name={name} /> : <PrForm onDone={finish} initialEmail={initialEmail} />}
          </div>
        </div>
      </div>
      <PrStyles />
    </section>
  );
}

/* ── styles ── */
function PrStyles() {
  return <style>{`
    .pr-band { position: relative; width: 100%;
      background:
        radial-gradient(1100px 560px at 50% -10%, rgba(243,72,109,0.06), transparent 60%),
        var(--surface-soft);
      border-top: 1px solid rgba(243,72,109,0.12);
      border-bottom: 1px solid rgba(243,72,109,0.12); }
    .pr-inner { position: relative; max-width: 1160px; margin: 0 auto; padding: 92px 32px; }
    .pr-glow { position:absolute; border-radius:50%; filter: blur(46px); pointer-events:none; z-index:0; }
    .pr-glow--a { top:30px; right:70px; width:300px; height:300px;
      background: radial-gradient(circle, rgba(234,137,84,0.18), transparent 70%); }
    .pr-glow--b { bottom:30px; left:30px; width:340px; height:340px;
      background: radial-gradient(circle, rgba(243,72,109,0.15), transparent 70%); }

    .pr-head { position: relative; z-index:1; text-align:center; max-width: 720px; margin: 0 auto 38px; }
    .pr-eyebrow { font-family: var(--font-sans); font-weight: var(--fw-bold);
      font-size: var(--fs-2xs); letter-spacing: var(--ls-wide); text-transform: uppercase; }
    .pr-eyebrow--brand { color: var(--njs-rose); }
    .pr-eyebrow--light { color: rgba(255,255,255,0.85); }
    .pr-headline { font-family: var(--font-display); font-weight: var(--fw-bold);
      font-size: 54px; line-height: var(--lh-tight); letter-spacing: var(--ls-tight);
      margin: 14px 0 0; color: var(--text-strong); text-wrap: balance; }
    .pr-headline em { font-style: italic;
      background: var(--njs-gradient); -webkit-background-clip: text; background-clip: text;
      -webkit-text-fill-color: transparent; }
    .pr-sub { font-size: var(--fs-lead); line-height: var(--lh-body); color: var(--text-muted);
      margin: 18px auto 0; max-width: 54ch; }

    .pr-card { position: relative; z-index:1; width:100%; max-width: 1040px; margin: 0 auto;
      display:grid; grid-template-columns: 0.92fr 1.08fr;
      background: var(--surface-card); border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg); overflow:hidden; }

    .pr-story { position:relative; min-height: 640px; padding: 40px; display:flex; align-items:flex-end; }
    .pr-story__img { position:absolute; inset:0;
      background: url('assets/about-portrait-sm.jpg') center 30% / cover no-repeat; }
    .pr-story__scrim { position:absolute; inset:0;
      background: linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 28%, rgba(24,8,10,0.5) 66%, rgba(20,6,8,0.88) 100%); }
    .pr-story__content { position:relative; color:#fff; }
    .pr-quote { font-family: var(--font-display); font-style: italic; font-weight: var(--fw-semibold);
      font-size: 28px; line-height: 1.3; margin: 14px 0 26px; max-width: 22ch;
      text-shadow: 0 2px 20px rgba(0,0,0,0.42); }
    .pr-quote em { font-style: italic; color: #ffd9c2; }
    .pr-story__foot { display:flex; align-items:center; gap:14px; }
    .pr-story__count { font-size: var(--fs-sm); line-height: 1.35; color: rgba(255,255,255,0.92); max-width: 14ch; }
    .pr-story__count strong { font-weight: var(--fw-bold); }

    .pr-panel { padding: 44px 46px 40px; display:flex; flex-direction:column; justify-content:center; }
    .pr-pill { display:inline-flex; align-items:center; gap:8px; align-self:flex-start;
      font-family: var(--font-sans); font-size: var(--fs-xs); font-weight: var(--fw-semibold);
      color: var(--njs-rose-deep); background: rgba(243,72,109,0.10);
      border: 1px solid rgba(243,72,109,0.25); padding: 7px 14px; border-radius: var(--radius-pill);
      margin-bottom: 16px; }
    .pr-dot { width:7px; height:7px; border-radius:50%; background: var(--njs-rose);
      box-shadow: 0 0 0 4px rgba(243,72,109,0.18); }

    .pr-title { font-family: var(--font-display); font-weight: var(--fw-bold);
      font-size: var(--fs-h2); line-height: 1.08; letter-spacing: var(--ls-tight);
      margin: 0 0 12px; color: var(--text-strong); }
    .pr-title em { font-style: italic; color: var(--njs-rose); }
    .pr-lede { font-size: var(--fs-body); line-height: var(--lh-body); color: var(--text-muted);
      margin: 0; max-width: 46ch; }

    .pr-benefits { list-style:none; margin: 14px 0 16px; padding:0; display:flex; flex-direction:column; gap: 10px; }
    .pr-benefit { display:flex; align-items:flex-start; gap: 10px; }
    .pr-benefit__ic { flex:none; width:26px; height:26px; border-radius:50%; display:grid; place-items:center;
      color: var(--njs-rose); background: rgba(243,72,109,0.10); box-shadow: var(--ring-brand); margin-top:1px; }
    .pr-benefit__text { display:flex; flex-direction:column; gap:1px; }
    .pr-benefit__text strong { font-family: var(--font-sans); font-size: var(--fs-sm);
      font-weight: var(--fw-semibold); color: var(--text-strong); }
    .pr-benefit__text span { font-size: 0.72rem; line-height: 1.4; color: var(--text-muted); }

    .pr-form { display:flex; flex-direction:column; }
    .pr-row { display:grid; grid-template-columns: 0.85fr 1.15fr; gap: 14px; }

    .pr-cta-btn { position:relative; overflow:hidden; width:100%; margin-top:22px;
      display:inline-flex; align-items:center; justify-content:center; gap:10px;
      font-family:var(--font-sans); font-size:17px; font-weight:700; color:#fff;
      background: linear-gradient(90deg,#f3486d 0%,#ea8954 100%);
      border:none; border-radius:999px; padding:17px 30px; cursor:pointer;
      box-shadow: 0 14px 34px rgba(243,72,109,0.34), inset 0 0 0 1px rgba(255,255,255,0.15);
      transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, filter 0.3s ease; }
    .pr-cta-btn:hover { transform:translateY(-3px) scale(1.02);
      box-shadow:0 22px 48px rgba(243,72,109,0.5), inset 0 0 0 1px rgba(255,255,255,0.22); filter:saturate(1.08); }
    .pr-cta-btn:active { transform:scale(0.98); }
    .pr-cta-btn__shimmer { position:absolute; inset:0; pointer-events:none; border-radius:inherit;
      background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,0.22) 50%,transparent 65%);
      animation: pr-shimmer 3.2s ease-in-out infinite; }
    @keyframes pr-shimmer { 0%,30%{transform:translateX(-100%)} 70%,100%{transform:translateX(100%)} }
      font-size: var(--fs-xs); color: var(--text-muted); }
    .pr-trust svg { color: var(--njs-coral); flex:none; }

    .pr-success { animation: pr-in var(--dur-med) var(--ease-soft) both; }
    @keyframes pr-in { from { opacity:0; transform: translateY(10px);} to { opacity:1; transform:none; } }
    .pr-success__badge { width:62px; height:62px; border-radius:50%; display:grid; place-items:center;
      color:#fff; background: var(--njs-gradient); box-shadow: var(--shadow-brand); margin-bottom: 18px; }

    .pr-pos { display:flex; align-items:center; justify-content:space-between; gap:14px; flex-wrap:wrap;
      margin: 20px 0 16px; padding: 18px 22px; border-radius: var(--radius-md);
      background: var(--njs-wash); box-shadow: var(--ring-brand); }
    .pr-pos__main { display:flex; align-items:baseline; gap:12px; }
    .pr-pos__num { font-family: var(--font-display); font-weight: var(--fw-extrabold);
      font-size: 40px; line-height: 1; color: var(--njs-rose-deep); }
    .pr-pos__label { font-size: var(--fs-sm); color: var(--text-muted); }
    .pr-pos__delta { font-size: var(--fs-xs); font-weight: var(--fw-bold); color: #fff; white-space: nowrap;
      background: var(--njs-gradient); padding: 6px 12px; border-radius: var(--radius-pill);
      animation: pr-pop var(--dur-med) var(--ease-soft) both; }
    @keyframes pr-pop { from { opacity:0; transform: scale(0.8);} to { opacity:1; transform:none; } }

    .pr-ref { display:flex; align-items:stretch; gap:8px; }
    .pr-ref__link { flex:1; min-width:0; display:flex; align-items:center; font-family: var(--font-sans);
      font-size: var(--fs-sm); color: var(--text-muted); background: var(--surface-page);
      border: 1.5px solid var(--border-subtle); border-radius: var(--radius-pill);
      padding: 12px 18px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
    .pr-ref__btn { flex:none; font-family: var(--font-sans); font-size: var(--fs-sm); font-weight: var(--fw-bold);
      color: var(--njs-rose-deep); background: transparent; border: 1.5px solid var(--njs-rose);
      border-radius: var(--radius-pill); padding: 12px 22px; cursor:pointer;
      transition: all var(--dur-fast) var(--ease-soft); white-space:nowrap; }
    .pr-ref__btn:hover { background: rgba(243,72,109,0.08); }
    .pr-ref__btn.is-copied { color:#fff; background: var(--njs-gradient); border-color: transparent; }
    .pr-ref__hint { font-size: var(--fs-xs); color: var(--text-muted); margin: 10px 0 0; }

    .pr-note { display:flex; gap:14px; align-items:flex-start; margin: 26px 0 0; padding-top: 24px;
      border-top: 1px solid var(--border-subtle); }
    .pr-note__av { width:48px; height:48px; border-radius:50%; object-fit:cover; flex:none;
      box-shadow: var(--shadow-sm); }
    .pr-note__body { display:flex; flex-direction:column; gap:4px; }
    .pr-note__text { font-family: var(--font-hand); font-size: 21px; line-height: 1.45;
      color: var(--text-body); margin:0; }
    .pr-note__sign { font-family: var(--font-hand); font-size: 16px; color: var(--njs-rose-deep); }

    @media (max-width: 920px){
      .pr-inner { padding: 68px 28px; }
      .pr-headline { font-size: 42px; }
      .pr-card { grid-template-columns: 1fr; max-width: 560px; }
      .pr-story { min-height: 300px; }
      .pr-story__img { background-position: center 24%; }
      .pr-panel { padding: 34px 28px 32px; }
    }
    @media (max-width: 540px){
      .pr-inner { padding: 48px 16px 40px; }
      .pr-headline { font-size: 28px; }
      .pr-sub { font-size: var(--fs-body); }
      .pr-head { margin-bottom: 24px; }
      .pr-row { grid-template-columns: 1fr; }
      .pr-card { max-width: 100%; border-radius: var(--radius-md); }
      .pr-story { min-height: 180px; padding: 20px; }
      .pr-quote { font-size: 18px; margin: 10px 0 14px; }
      .pr-panel { padding: 24px 20px 28px; }
      .pr-title { font-size: var(--fs-h3); }
      .pr-ref { flex-direction: column; }
      .pr-ref__link { justify-content: center; }
      .pr-cta-btn { font-size: 15px; padding: 15px 20px; }
    }
    @media (max-width: 380px){
      .pr-inner { padding: 36px 12px 32px; }
      .pr-headline { font-size: 24px; }
      .pr-panel { padding: 20px 16px 24px; }
    }
  `}</style>;
}

export { PreRegisterSection };
