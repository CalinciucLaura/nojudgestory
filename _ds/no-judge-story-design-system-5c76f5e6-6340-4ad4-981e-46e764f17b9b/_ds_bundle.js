/* @ds-bundle: {"format":3,"namespace":"NoJudgeStoryDesignSystem_5c76f5","components":[{"name":"AvatarStack","sourcePath":"components/core/AvatarStack.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"TopicChip","sourcePath":"components/core/TopicChip.jsx"}],"sourceHashes":{"components/core/AvatarStack.jsx":"9b26d4d5db86","components/core/Button.jsx":"fb13642e18d7","components/core/Input.jsx":"1590b300c9b3","components/core/Logo.jsx":"55fb115d7d0e","components/core/TopicChip.jsx":"ad00f55f404d","ui_kits/waitlist/Waitlist.jsx":"5d3ca7905d3f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NoJudgeStoryDesignSystem_5c76f5 = window.NoJudgeStoryDesignSystem_5c76f5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/AvatarStack.jsx
try { (() => {
// No Judge Story — AvatarStack (social proof)

function AvatarStack({
  avatars = [],
  more,
  size = 38,
  light = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, avatars.map((src, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      marginLeft: i === 0 ? 0 : -size * 0.32,
      border: '2px solid ' + (light ? 'rgba(255,255,255,0.9)' : 'var(--surface-page)'),
      boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
      zIndex: avatars.length - i
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))), more && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontSize: 12,
      fontWeight: 700,
      color: '#fff',
      background: 'var(--njs-gradient)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-pill)'
    }
  }, more));
}
Object.assign(__ds_scope, { AvatarStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AvatarStack.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// No Judge Story — Button
// Primary CTA uses the signature rose→coral gradient pill.

function Button({
  children,
  variant = 'primary',
  // 'primary' | 'secondary' | 'ghost'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  icon = false,
  // show trailing arrow
  as = 'button',
  ...props
}) {
  const pad = {
    sm: '10px 18px',
    md: '14px 24px',
    lg: '17px 30px'
  }[size];
  const fs = {
    sm: 14,
    md: 16,
    lg: 18
  }[size];
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: fs,
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: pad,
    borderRadius: 'var(--radius-pill)',
    cursor: 'pointer',
    border: '1.5px solid transparent',
    transition: 'transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast), background var(--dur-fast)'
  };
  const variants = {
    primary: {
      color: 'var(--text-on-brand)',
      background: 'var(--njs-gradient)',
      boxShadow: 'var(--shadow-brand)'
    },
    secondary: {
      color: 'var(--njs-rose-deep)',
      background: 'transparent',
      borderColor: 'var(--njs-rose)'
    },
    ghost: {
      color: 'var(--text-body)',
      background: 'transparent',
      borderColor: 'transparent'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant]
    }
  }, props), children, icon && /*#__PURE__*/React.createElement("svg", {
    width: size === 'sm' ? 16 : 20,
    height: size === 'sm' ? 16 : 20,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h13M13 6l6 6-6 6",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// No Judge Story — Input (labeled field)

function Input({
  label,
  optional,
  error,
  id,
  ...props
}) {
  const fid = id || 'njs-' + Math.random().toString(36).slice(2, 7);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-body)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, label, optional && /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      fontSize: 10,
      fontWeight: 500,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, "op\u021Bional")), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    "aria-invalid": !!error,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--text-strong)',
      background: 'var(--surface-page)',
      border: '1.5px solid ' + (error ? 'var(--njs-red)' : 'var(--border-subtle)'),
      borderRadius: 14,
      padding: '13px 16px',
      width: '100%',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    },
    onFocus: e => {
      if (!error) {
        e.target.style.borderColor = 'var(--njs-rose)';
        e.target.style.boxShadow = '0 0 0 4px var(--focus-ring)';
      }
    },
    onBlur: e => {
      if (!error) {
        e.target.style.borderColor = 'var(--border-subtle)';
        e.target.style.boxShadow = 'none';
      }
    }
  }, props)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--njs-red)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// No Judge Story — wordmark logo

function Logo({
  size = 26,
  light = false,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: size * 0.38
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: size * 0.58,
      color: light ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)',
      letterSpacing: '.01em'
    }
  }, "No Judge"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: size,
      color: 'var(--njs-red)',
      letterSpacing: '.02em'
    }
  }, "STORY"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/TopicChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// No Judge Story — TopicChip
// Toggleable category pill (relații, familie, carieră, …).

function TopicChip({
  children,
  selected = false,
  ...props
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": selected,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: selected ? 600 : 500,
      color: selected ? 'var(--njs-rose-deep)' : 'var(--text-body)',
      background: selected ? 'rgba(243,72,109,0.10)' : 'var(--surface-page)',
      border: '1.5px solid ' + (selected ? 'var(--njs-rose)' : 'var(--border-subtle)'),
      padding: '9px 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'all var(--dur-fast) var(--ease-soft)'
    }
  }, props), children);
}
Object.assign(__ds_scope, { TopicChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TopicChip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/waitlist/Waitlist.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// No Judge Story — Pre-register / waitlist screen.
// Split editorial card: emotional story panel on the left, high-converting form on the right.
// Self-contained; reads brand tokens from ../../styles.css.

const NJS_TOPICS = ['relații', 'familie', 'carieră', 'prietenii', 'copilărie', 'călătorii', 'căsnicie', 'beauty'];
function NjsField({
  label,
  optional,
  ...props
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "njs-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "njs-field__label"
  }, label, optional && /*#__PURE__*/React.createElement("em", {
    className: "njs-field__opt"
  }, "op\u021Bional")), /*#__PURE__*/React.createElement("input", _extends({
    className: "njs-input"
  }, props)));
}
function AvatarStack() {
  const imgs = [1, 2, 3, 4].map(n => `../../assets/images/avatar-${n}.jpg`);
  return /*#__PURE__*/React.createElement("div", {
    className: "njs-avatars"
  }, imgs.map((src, i) => /*#__PURE__*/React.createElement("span", {
    className: "njs-avatars__a",
    key: i,
    style: {
      zIndex: imgs.length - i
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: ""
  }))), /*#__PURE__*/React.createElement("span", {
    className: "njs-avatars__more"
  }, "+12k"));
}
function Waitlist() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [topics, setTopics] = React.useState([]);
  const [touched, setTouched] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const position = React.useMemo(() => 12000 + Math.floor(Math.random() * 900) + 80, []);
  const toggleTopic = t => setTopics(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  const submit = e => {
    e.preventDefault();
    setTouched(true);
    if (!validEmail) return;
    setDone(true);
  };
  const share = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "njs-page"
  }, /*#__PURE__*/React.createElement(NjsStyles, null), /*#__PURE__*/React.createElement("header", {
    className: "njs-top"
  }, /*#__PURE__*/React.createElement("a", {
    className: "njs-logo",
    href: "#",
    "aria-label": "No Judge Story"
  }, /*#__PURE__*/React.createElement("span", {
    className: "njs-logo__pre"
  }, "No Judge"), /*#__PURE__*/React.createElement("span", {
    className: "njs-logo__mark"
  }, "STORY")), /*#__PURE__*/React.createElement("span", {
    className: "njs-top__tag"
  }, "\xCEn cur\xE2nd \xB7 Beta privat")), /*#__PURE__*/React.createElement("main", {
    className: "njs-shell"
  }, /*#__PURE__*/React.createElement("section", {
    className: "njs-card"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "njs-story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "njs-story__img"
  }), /*#__PURE__*/React.createElement("div", {
    className: "njs-story__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "njs-story__content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "njs-eyebrow njs-eyebrow--light"
  }, "Experien\u021Be reale, anonime"), /*#__PURE__*/React.createElement("p", {
    className: "njs-quote"
  }, "\u201EM-am sim\u021Bit exclus\u0103\u2026 p\xE2n\u0103 am g\u0103sit un loc unde puteam scrie f\u0103r\u0103 s\u0103-mi fie team\u0103 de judecat\u0103.\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "njs-story__foot"
  }, /*#__PURE__*/React.createElement(AvatarStack, null), /*#__PURE__*/React.createElement("span", {
    className: "njs-story__count"
  }, /*#__PURE__*/React.createElement("strong", null, "12.000+"), " femei sunt deja pe list\u0103")))), /*#__PURE__*/React.createElement("div", {
    className: "njs-form-wrap"
  }, !done ? /*#__PURE__*/React.createElement("form", {
    className: "njs-form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("span", {
    className: "njs-pill-eyebrow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "njs-dot"
  }), " Lista de pre-\xEEnregistrare"), /*#__PURE__*/React.createElement("h1", {
    className: "njs-title"
  }, "Un loc al t\u0103u, ", /*#__PURE__*/React.createElement("em", null, "f\u0103r\u0103 judecat\u0103")), /*#__PURE__*/React.createElement("p", {
    className: "njs-lede"
  }, "Deschidem \xEEn cur\xE2nd un spa\u021Biu sigur \u0219i anonim pentru pove\u0219tile tale. Intr\u0103 pe list\u0103 \u0219i prime\u0219ti acces \xEEnaintea tuturor."), /*#__PURE__*/React.createElement("div", {
    className: "njs-row"
  }, /*#__PURE__*/React.createElement(NjsField, {
    label: "Prenume",
    optional: true,
    type: "text",
    placeholder: "Cum s\u0103-\u021Bi spunem?",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(NjsField, {
    label: "Email",
    type: "email",
    placeholder: "tu@exemplu.ro",
    value: email,
    onChange: e => setEmail(e.target.value),
    onBlur: () => setTouched(true),
    "aria-invalid": touched && !validEmail
  })), touched && !validEmail && /*#__PURE__*/React.createElement("p", {
    className: "njs-err"
  }, "Introdu o adres\u0103 de email valid\u0103 ca s\u0103-\u021Bi p\u0103str\u0103m locul."), /*#__PURE__*/React.createElement("div", {
    className: "njs-topics"
  }, /*#__PURE__*/React.createElement("span", {
    className: "njs-topics__q"
  }, "Ce pove\u0219ti te cheam\u0103? ", /*#__PURE__*/React.createElement("em", null, "op\u021Bional")), /*#__PURE__*/React.createElement("div", {
    className: "njs-chips"
  }, NJS_TOPICS.map(t => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: t,
    className: 'njs-chip' + (topics.includes(t) ? ' is-on' : ''),
    onClick: () => toggleTopic(t)
  }, t)))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "njs-cta"
  }, "Vreau acces anticipat", /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h13M13 6l6 6-6 6",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "njs-trust"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "11",
    width: "14",
    height: "9",
    rx: "2.2",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11V8a4 4 0 0 1 8 0v3",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })), "F\u0103r\u0103 spam. Anonimat garantat. Te anun\u021B\u0103m doar la lansare.")) : /*#__PURE__*/React.createElement("div", {
    className: "njs-success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "njs-success__badge",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "34",
    height: "34",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5l4.2 4.2L19 7",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("h1", {
    className: "njs-title"
  }, "E\u0219ti pe list\u0103", name ? `, ${name}` : '', "."), /*#__PURE__*/React.createElement("p", {
    className: "njs-lede"
  }, "\u021Ai-am p\u0103strat locul. Vei fi printre primele care intr\u0103 c\xE2nd deschidem por\u021Bile."), /*#__PURE__*/React.createElement("div", {
    className: "njs-pos"
  }, /*#__PURE__*/React.createElement("span", {
    className: "njs-pos__num"
  }, "#", position.toLocaleString('ro-RO')), /*#__PURE__*/React.createElement("span", {
    className: "njs-pos__label"
  }, "locul t\u0103u pe list\u0103")), /*#__PURE__*/React.createElement("p", {
    className: "njs-note"
  }, "Abia a\u0219tept s\u0103-\u021Bi citesc povestea.", /*#__PURE__*/React.createElement("br", null), "\u2014 Laura, fondatoare"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "njs-share",
    onClick: share
  }, copied ? 'Link copiat — mulțumim!' : 'Invită o prietenă pe listă'))))));
}
function NjsStyles() {
  return /*#__PURE__*/React.createElement("style", null, `
    .njs-page { max-width: 1160px; margin: 0 auto; padding: 28px 28px 56px; }

    .njs-top { display:flex; align-items:center; justify-content:space-between; margin-bottom: 34px; }
    .njs-logo { display:flex; align-items:baseline; gap:10px; text-decoration:none; }
    .njs-logo__pre { font-family: var(--font-sans); font-weight: var(--fw-semibold);
      font-size: 15px; color: var(--text-muted); letter-spacing: .01em; }
    .njs-logo__mark { font-family: var(--font-sans); font-weight: var(--fw-extrabold);
      font-size: 26px; color: var(--njs-red); letter-spacing: .02em; }
    .njs-top__tag { font-size: var(--fs-xs); color: var(--text-muted); font-weight: var(--fw-medium);
      background: var(--surface-soft); padding: 7px 14px; border-radius: var(--radius-pill); }

    .njs-shell { display:flex; justify-content:center; }
    .njs-card {
      width: 100%; max-width: 1060px;
      display: grid; grid-template-columns: 0.95fr 1.05fr;
      background: var(--surface-card);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      overflow: hidden;
    }

    /* Story panel */
    .njs-story { position: relative; min-height: 600px; padding: 40px; display:flex; align-items:flex-end; }
    .njs-story__img { position:absolute; inset:0;
      background: url('../../assets/images/about-portrait.jpg') center 32% / cover no-repeat; }
    .njs-story__scrim { position:absolute; inset:0;
      background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.0) 30%, rgba(20,8,10,0.55) 72%, rgba(20,6,8,0.86) 100%); }
    .njs-story__content { position: relative; color:#fff; }
    .njs-quote { font-family: var(--font-display); font-style: italic; font-weight: var(--fw-semibold);
      font-size: 27px; line-height: 1.28; margin: 14px 0 26px; max-width: 24ch;
      text-shadow: 0 2px 18px rgba(0,0,0,0.4); }
    .njs-story__foot { display:flex; align-items:center; gap:14px; }
    .njs-story__count { font-size: var(--fs-sm); line-height: 1.35; color: rgba(255,255,255,0.92); }
    .njs-story__count strong { font-weight: var(--fw-bold); }

    .njs-avatars { display:flex; align-items:center; }
    .njs-avatars__a { width:38px; height:38px; border-radius:50%; overflow:hidden;
      margin-left:-12px; border:2px solid rgba(255,255,255,0.9); box-shadow: 0 2px 8px rgba(0,0,0,0.3); }
    .njs-avatars__a:first-child { margin-left:0; }
    .njs-avatars__a img { width:100%; height:100%; object-fit:cover; display:block; }
    .njs-avatars__more { margin-left:8px; font-size: var(--fs-xs); font-weight: var(--fw-bold);
      color:#fff; background: var(--njs-gradient); padding:6px 10px; border-radius: var(--radius-pill); }

    /* Form panel */
    .njs-form-wrap { padding: 48px 48px 44px; display:flex; flex-direction:column; justify-content:center; }
    .njs-eyebrow { font-family: var(--font-sans); font-weight: var(--fw-bold);
      font-size: var(--fs-2xs); letter-spacing: var(--ls-wide); text-transform: uppercase; }
    .njs-eyebrow--light { color: rgba(255,255,255,0.85); }

    .njs-pill-eyebrow { display:inline-flex; align-items:center; gap:8px; align-self:flex-start;
      font-size: var(--fs-xs); font-weight: var(--fw-semibold); color: var(--njs-rose-deep);
      background: rgba(243,72,109,0.10); border: 1px solid rgba(243,72,109,0.25);
      padding: 7px 14px; border-radius: var(--radius-pill); margin-bottom: 18px; }
    .njs-dot { width:7px; height:7px; border-radius:50%; background: var(--njs-rose);
      box-shadow: 0 0 0 4px rgba(243,72,109,0.18); }

    .njs-title { font-family: var(--font-display); font-weight: var(--fw-bold);
      font-size: 40px; line-height: 1.08; letter-spacing: var(--ls-tight); margin: 0 0 12px; color: var(--text-strong); }
    .njs-title em { font-style: italic; color: var(--njs-rose); }
    .njs-lede { font-size: var(--fs-body); line-height: var(--lh-body); color: var(--text-muted);
      margin: 0 0 26px; max-width: 42ch; }

    .njs-row { display:grid; grid-template-columns: 1fr 1.25fr; gap: 14px; }
    @media (max-width: 520px){ .njs-row { grid-template-columns: 1fr; } }
    .njs-field { display:flex; flex-direction:column; gap:7px; }
    .njs-field__label { font-size: var(--fs-sm); font-weight: var(--fw-semibold); color: var(--text-body);
      display:flex; align-items:center; gap:8px; }
    .njs-field__opt { font-style: normal; font-size: var(--fs-2xs); font-weight: var(--fw-medium);
      color: var(--text-muted); text-transform: uppercase; letter-spacing: .06em; }
    .njs-input { font-family: var(--font-sans); font-size: var(--fs-body); color: var(--text-strong);
      background: var(--surface-page); border: 1.5px solid var(--border-subtle); border-radius: 14px;
      padding: 13px 16px; transition: border-color var(--dur-fast), box-shadow var(--dur-fast); width:100%; }
    .njs-input::placeholder { color: #b3b0af; }
    .njs-input:focus { outline:none; border-color: var(--njs-rose); box-shadow: 0 0 0 4px var(--focus-ring); }
    .njs-input[aria-invalid="true"] { border-color: var(--njs-red); box-shadow: 0 0 0 4px rgba(237,78,81,0.18); }
    .njs-err { font-size: var(--fs-sm); color: var(--njs-red); margin: 10px 0 0; }

    .njs-topics { margin-top: 22px; }
    .njs-topics__q { display:block; font-size: var(--fs-sm); font-weight: var(--fw-semibold);
      color: var(--text-body); margin-bottom: 12px; }
    .njs-topics__q em { font-style: normal; font-size: var(--fs-2xs); color: var(--text-muted);
      text-transform: uppercase; letter-spacing:.06em; margin-left:4px; }
    .njs-chips { display:flex; flex-wrap:wrap; gap:9px; }
    .njs-chip { font-family: var(--font-sans); font-size: var(--fs-sm); font-weight: var(--fw-medium);
      color: var(--text-body); background: var(--surface-page); border: 1.5px solid var(--border-subtle);
      padding: 9px 16px; border-radius: var(--radius-pill); cursor: pointer;
      transition: all var(--dur-fast) var(--ease-soft); }
    .njs-chip:hover { border-color: var(--njs-rose); color: var(--njs-rose-deep); }
    .njs-chip.is-on { color: var(--njs-rose-deep); background: rgba(243,72,109,0.10);
      border-color: var(--njs-rose); font-weight: var(--fw-semibold); }

    .njs-cta { margin-top: 28px; display:inline-flex; align-items:center; justify-content:center; gap:10px;
      font-family: var(--font-sans); font-size: 17px; font-weight: var(--fw-bold); color: var(--text-on-brand);
      background: var(--njs-gradient); border: none; border-radius: var(--radius-pill);
      padding: 16px 24px; cursor: pointer; box-shadow: var(--shadow-brand);
      transition: transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast), filter var(--dur-fast); }
    .njs-cta:hover { transform: translateY(-2px); box-shadow: 0 18px 40px rgba(243,72,109,0.40); filter: saturate(1.05); }
    .njs-cta:active { transform: translateY(0) scale(0.99); }
    .njs-cta svg { transition: transform var(--dur-fast) var(--ease-soft); }
    .njs-cta:hover svg { transform: translateX(3px); }

    .njs-trust { display:flex; align-items:center; gap:8px; margin: 16px 0 0;
      font-size: var(--fs-xs); color: var(--text-muted); }
    .njs-trust svg { color: var(--njs-coral); flex:none; }

    /* Success */
    .njs-success { animation: njs-in var(--dur-med) var(--ease-soft) both; }
    @keyframes njs-in { from { opacity:0; transform: translateY(10px);} to { opacity:1; transform:none; } }
    .njs-success__badge { width:64px; height:64px; border-radius:50%; display:grid; place-items:center;
      color:#fff; background: var(--njs-gradient); box-shadow: var(--shadow-brand); margin-bottom: 22px; }
    .njs-pos { display:flex; align-items:baseline; gap:12px; margin: 4px 0 22px;
      padding: 18px 22px; border-radius: var(--radius-md); background: var(--njs-wash);
      box-shadow: var(--ring-brand); }
    .njs-pos__num { font-family: var(--font-display); font-weight: var(--fw-extrabold);
      font-size: 38px; line-height: 1; color: var(--njs-rose-deep); }
    .njs-pos__label { font-size: var(--fs-sm); color: var(--text-muted); }
    .njs-note { font-family: var(--font-hand); font-size: 21px; line-height: 1.5; color: var(--text-body);
      margin: 0 0 24px; }
    .njs-share { font-family: var(--font-sans); font-size: 15px; font-weight: var(--fw-bold);
      color: var(--njs-rose-deep); background: transparent; border: 1.5px solid var(--njs-rose);
      border-radius: var(--radius-pill); padding: 13px 22px; cursor: pointer;
      transition: all var(--dur-fast) var(--ease-soft); }
    .njs-share:hover { background: rgba(243,72,109,0.08); }

    @media (max-width: 880px){
      .njs-card { grid-template-columns: 1fr; max-width: 560px; }
      .njs-story { min-height: 280px; }
      .njs-form-wrap { padding: 34px 26px 32px; }
      .njs-title { font-size: 32px; }
    }
  `);
}
window.Waitlist = Waitlist;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/waitlist/Waitlist.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AvatarStack = __ds_scope.AvatarStack;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.TopicChip = __ds_scope.TopicChip;

})();
