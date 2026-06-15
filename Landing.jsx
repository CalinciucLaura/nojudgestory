// No Judge Story — Landing page
import { Logo as LpLogo, Button as LpButton, TopicChip as LpTopicChip, AvatarStack as LpAvatarStack } from './ds';
import { PreRegisterSection } from './PreRegister';

const LP_AVATARS = [1, 2, 3, 4].map((n) => `assets/avatar-${n}.jpg`);

const LP_FA_LARGE = [
  {
    img: 'assets/about-portrait-sm.jpg',
    title: 'Am plecat după 6 ani. Nu m-am simțit niciodată mai liberă.',
    excerpt: 'Toată lumea din jur îmi spunea că sunt nebună. Că o relație de 6 ani nu se aruncă. Că o să regret. Nimeni nu știa cum era cu adevărat în spatele ușilor închise — nici eu nu știam cum să explic. Până când am scris. Și atunci am înțeles.',
    date: '03/04/2025', read: '6 minute de citit',
  },
  {
    img: 'assets/story-feature-sm.jpg',
    title: 'Nimeni nu mi-a spus că maternitatea poate fi și singurătate.',
    excerpt: 'Toată lumea îți spune că va fi frumos. Că vei iubi cu o intensitate pe care nu ai mai simțit-o. Și e adevărat. Dar nimeni nu îți spune că poți ține un bebeluș în brațe și să te simți complet singură. Eu am simțit asta și mi-a fost rușine ani de zile.',
    date: '17/04/2025', read: '5 minute de citit',
  },
];

const LP_FA_MINI = [
  {
    img: 'assets/avatar-1.jpg',
    title: 'Mi-am dat demisia fără alt job. Și nu regret.',
    excerpt: 'Toată lumea m-a privit de parcă aș fi pierdut mințile. Dar în interiorul meu era, pentru prima dată după ani, liniște.',
  },
  {
    img: 'assets/avatar-2.jpg',
    title: 'Am 34 de ani și abia acum îmi place de mine.',
    excerpt: 'Nu a fost un moment anume. A fost o dimineață obișnuită când m-am uitat în oglindă și nu m-am mai criticat. Pur și simplu.',
  },
  {
    img: 'assets/avatar-3.jpg',
    title: 'Anxietatea mea nu este slăbiciune. A durat 3 ani să înțeleg asta.',
    excerpt: 'Credeam că dacă o ascund destul de bine, va dispărea. Spoiler: nu dispare. Dar când am vorbit despre ea, s-a mai micșorat puțin.',
  },
];

const LP_FA_BOTTOM = [
  {
    img: 'assets/founder-sm.jpg',
    title: 'Prietena mea cea mai bună nu mai există. A ales el în locul meu.',
    excerpt: 'Opt ani de prietenie. Sute de nopți în care am plâns una la cealaltă. Și într-o zi, pur și simplu, nu a mai răspuns la telefon. Am înțeles mult mai târziu că nu era vina mea.',
    date: '28/03/2025', read: '4 minute de citit',
  },
  {
    img: 'assets/hero-portrait.png',
    title: 'La 40 de ani am început să trăiesc pentru mine. Nu era târziu.',
    excerpt: 'Toată viața am trăit pentru alții — pentru părinți, pentru soț, pentru copii. La 40 de ani am înscris la un curs de pictură fără să cer voie nimănui. A fost revoluționar.',
    date: '10/05/2025', read: '7 minute de citit',
  },
  {
    img: 'assets/about-portrait-sm.jpg',
    title: 'Burnout-ul nu arată ca în filme. Arată ca mine, zâmbind la birou.',
    excerpt: 'Nu am căzut dramatic. Nu am plâns în public. Am continuat să merg la muncă, să zâmbesc, să livrez. Pe interior mă stingeam încet, fără să știu cum să cer ajutor.',
    date: '22/04/2025', read: '5 minute de citit',
  },
];

const LP_STORIES = [
  {
    cat: 'relații',
    quote: 'Credeam că sunt singura care simte așa. Aici am citit zeci de povești care erau, de fapt, a mea.',
    who: 'anonim · 29 de ani',
    feature: false,
  },
  {
    cat: 'viața de mămică',
    quote: 'Am scris noaptea, în timp ce alăptam. Nimeni nu m-a corectat, nimeni nu m-a judecat — doar m-au ascultat.',
    who: 'anonim · 34 de ani',
    feature: true,
  },
  {
    cat: 'carieră',
    quote: 'Mi-am dat demisia și mi-a fost frică să spun cuiva. Aici am spus-o întâi — și am respirat.',
    who: 'anonim · 41 de ani',
    feature: false,
  },
];

const LP_PROMISES = ['anonim', 'fără critici', 'fără judecată', 'spațiu safe'];

/* ───────────── nav ───────────── */
function LpNav() {
  return (
    <header className="lp-nav">
      <a href="#top" className="lp-nav__logo" aria-label="No Judge Story"><LpLogo size={26} /></a>
      <nav className="lp-nav__links">
        <a href="#povesti">Povești</a>
        <a href="#categorii">Categorii</a>
        <a href="#fondatoare">Despre</a>
        <a href="#acces-anticipat" className="lp-nav__cta">Intră pe listă</a>
      </nav>
    </header>
  );
}

/* ───────────── AnimatedCTA — buton hero cu shimmer + spring ───────────── */
function AnimatedCTA({ href, onClick, children }) {
  return (
    <a href={href} onClick={onClick} className="anim-cta">
      <span className="anim-cta__shimmer" aria-hidden="true" />
      <span className="anim-cta__label">{children}</span>
      <span className="anim-cta__arrow" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}

/* ───────────── FadeUp — scroll-trigger reveal ───────────── */
function FadeUp({ children, delay = 0, as: Tag = 'div', className, style, id }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(26px)';
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      el.style.transition = `opacity 0.65s ${delay}s cubic-bezier(0.22,0.61,0.36,1), transform 0.65s ${delay}s cubic-bezier(0.22,0.61,0.36,1)`;
      el.style.opacity = '1';
      el.style.transform = 'none';
      obs.disconnect();
    }, { rootMargin: '-60px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <Tag ref={ref} className={className} style={style} id={id}>{children}</Tag>;
}

/* ───────────── hero (fidel Figma) ───────────── */
const LP_HERO_CARDS = [
  {
    img: 'assets/about-portrait-sm.jpg', av: 'assets/avatar-1.jpg',
    quote: 'M-am simțit exclusă…',
    body: 'Până am găsit un loc unde puteam scrie fără să-mi fie teamă de judecată.',
  },
  {
    img: 'assets/hero-portrait.png', av: 'assets/avatar-2.jpg',
    quote: 'Credeam că sunt singura.',
    body: 'Aici am citit zeci de povești care erau, de fapt, ale mele.',
  },
  {
    img: 'assets/story-feature-sm.jpg', av: 'assets/avatar-3.jpg',
    quote: 'Am scris și am respirat.',
    body: 'Mi-am dat demisia și mi-a fost frică să spun cuiva. Aici am spus-o întâi.',
  },
  {
    img: 'assets/founder-sm.jpg', av: 'assets/avatar-4.jpg',
    quote: 'Pentru prima dată, ascultată.',
    body: 'Am scris noaptea, în timp ce alăptam. Nimeni nu m-a judecat — m-au ascultat.',
  },
];

function LpHero() {
  const go = (e) => { e.preventDefault(); document.getElementById('acces-anticipat').scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  return (
    <section className="lp-hero" id="top">
      <div className="lp-hero__wash" aria-hidden="true" />

      <div className="lp-hero__head">
        <h1 className="lp-hero__title anim-up anim-up-d0">
          Un <em className="c-rose">spațiu sigur</em><br />
          pentru <em className="c-grad">povești fără judecată</em>
        </h1>
        <p className="lp-hero__sub anim-up anim-up-d2">
          Citește și împărtășește experiențe reale într-un spațiu anonim,
          fără critici, doar experiențe sincere.
        </p>
        <div className="lp-hero__cta anim-up anim-up-d3">
          <AnimatedCTA href="#acces-anticipat" onClick={go}>
            Vreau acces anticipat
          </AnimatedCTA>
          <span className="lp-hero__proof">
            <LpAvatarStack avatars={LP_AVATARS} more="+12k" size={34} light={false} />
            <span><strong>12.000+</strong> femei deja pe listă</span>
          </span>
        </div>
      </div>

      <div className="lp-hero__cards">
        {LP_HERO_CARDS.map((c, i) => (
          <article className="lp-hc" key={i} style={{ animationDelay: (0.62 + i * 0.15) + 's' }}>
            <div className="lp-hc__img" style={{ backgroundImage: `url(${c.img})` }} />
            <img className="lp-hc__av" src={c.av} alt="" />
            <div className="lp-hc__panel">
              <p className="lp-hc__q">„{c.quote}”</p>
              <p className="lp-hc__b">{c.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ───────────── promises strip ───────────── */
function LpPromises() {
  return (
    <div className="lp-promises">
      {LP_PROMISES.map((p, i) => (
        <React.Fragment key={p}>
          {i > 0 && <span className="lp-promises__dot" aria-hidden="true" />}
          <span className="lp-promises__item">{p}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

/* ───────────── featured articles ───────────── */
function LpFeaturedArticles() {
  return (
    <section className="lp-fa" id="categorii">
      <FadeUp>
        <h2 className="lp-fa__title">
          Prima comunitate care își dorește să susțină<br />
          <em className="lp-fa__em-rose">femeile</em>{' '}
          <em className="lp-fa__em-dark">în a-și exprima</em>{' '}
          <em className="lp-fa__em-grad">poveștile de viață</em>
        </h2>
        <a href="#povesti" className="lp-fa__discover">Descoperă poveștile</a>
      </FadeUp>

      <div className="lp-fa__row1">
        {LP_FA_LARGE.map((a, i) => (
          <FadeUp key={i} delay={i * 0.1} as="article" className="lp-fa__card lp-fa__card--lg">
            <img className="lp-fa__card-img" src={a.img} alt="" />
            <h3 className="lp-fa__card-title lp-fa__card-title--lg">{a.title}</h3>
            <p className="lp-fa__card-excerpt">{a.excerpt}</p>
            <span className="lp-fa__card-meta">{a.date} · {a.read}</span>
          </FadeUp>
        ))}
        <FadeUp delay={0.2} className="lp-fa__mini-box">
          {LP_FA_MINI.map((a, i) => (
            <article key={i} className="lp-fa__mini">
              <div className="lp-fa__mini-top">
                <h3 className="lp-fa__mini-title">{a.title}</h3>
                <img className="lp-fa__mini-img" src={a.img} alt="" />
              </div>
              <p className="lp-fa__mini-excerpt">{a.excerpt}</p>
              {i < LP_FA_MINI.length - 1 && <hr className="lp-fa__mini-sep" />}
            </article>
          ))}
        </FadeUp>
      </div>

      <div className="lp-fa__row2">
        {LP_FA_BOTTOM.map((a, i) => (
          <FadeUp key={i} delay={i * 0.1} as="article" className="lp-fa__card">
            <img className="lp-fa__card-img" src={a.img} alt="" />
            <h3 className="lp-fa__card-title">{a.title}</h3>
            <p className="lp-fa__card-excerpt">{a.excerpt}</p>
            <span className="lp-fa__card-meta">{a.date} · {a.read}</span>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

/* ───────────── despre / stats ───────────── */
const LP_STATS = [
  { num: '12K+', label: 'femei înscrise' },
  { num: '500+', label: 'povești scrise' },
  { num: '20+',  label: 'categorii' },
  { num: '100%', label: 'anonim' },
];

function BotanicDeco() {
  return (
    <svg className="lp-about__deco" viewBox="0 0 180 230" fill="none" aria-hidden="true">
      <ellipse cx="112" cy="72" rx="52" ry="40" fill="#f3486d" opacity="0.17" transform="rotate(-22 112 72)" />
      <ellipse cx="88" cy="112" rx="34" ry="24" fill="#ea8954" opacity="0.13" transform="rotate(9 88 112)" />
      <path d="M90 215 Q84 178 74 140 Q64 102 59 64 Q54 36 64 14" stroke="#2a1f18" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M71 138 Q58 124 42 120 Q26 116 18 124" stroke="#2a1f18" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M18 124 Q27 112 36 115 Q45 118 44 126 Q43 134 34 133 Q25 132 18 124Z" stroke="#2a1f18" strokeWidth="1" fill="none" />
      <path d="M66 108 Q78 94 96 90 Q114 86 122 94" stroke="#2a1f18" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M122 94 Q120 83 113 81 Q106 79 104 86 Q102 93 109 97 Q116 101 122 94Z" stroke="#2a1f18" strokeWidth="1" fill="none" />
      <path d="M68 82 Q60 70 52 65 Q44 60 36 63" stroke="#2a1f18" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M36 63 Q42 54 50 56 Q58 58 57 66 Q56 74 48 73 Q40 72 36 63Z" stroke="#2a1f18" strokeWidth="1" fill="none" />
      <path d="M62 56 Q72 41 88 35 Q104 29 113 38" stroke="#2a1f18" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M113 38 Q111 27 104 25 Q97 23 95 31 Q93 39 100 43 Q107 47 113 38Z" stroke="#2a1f18" strokeWidth="1" fill="none" />
      <path d="M61 36 Q57 22 61 11" stroke="#2a1f18" strokeWidth="1.1" strokeLinecap="round" fill="none" />
      <path d="M64 14 Q70 8 78 10" stroke="#2a1f18" strokeWidth="1" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function LpAbout() {
  return (
    <section className="lp-about">
      <BotanicDeco />
      <FadeUp>
        <h2 className="lp-about__title">Despre ce este vorba pe scurt</h2>
        <p className="lp-about__sub">
          Primul spațiu destinat femeilor ce își doresc să își exprime poveștile de viață
          într-un mediu sigur, anonim și fără judecată.
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="lp-about__stats">
          {LP_STATS.map((s) => (
            <div key={s.label} className="lp-about__stat">
              <span className="lp-about__stat-num">{s.num}</span>
              <span className="lp-about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </FadeUp>

      <hr className="lp-about__divider" />

      <FadeUp delay={0.15}>
        <div className="lp-about__desc">
          <h3 className="lp-about__desc-head">Despre</h3>
          <p className="lp-about__desc-body">
            No Judge Story s-a născut dintr-o nevoie reală — aceea de a avea un loc unde
            să poți fi sinceră fără să-ți fie teamă. Un spațiu unde poveștile tale nu sunt
            judecate, corectate sau minimizate. Unde alte femei te înțeleg pentru că au
            trăit lucruri asemănătoare. Suntem o comunitate în construcție, și fiecare
            poveste împărtășită o face mai puternică.
          </p>
        </div>
      </FadeUp>
    </section>
  );
}

/* ───────────── povești ───────────── */
function LpStories() {
  return (
    <section className="lp-stories" id="povesti">
      <FadeUp>
        <div className="lp-section-head">
          <span className="lp-eyebrow lp-eyebrow--brand">Povești reale</span>
          <h2 className="lp-h2">Povești care îți <em>seamănă</em></h2>
          <p className="lp-section-sub">
            Fragmente sincere, scrise anonim de femei ca tine. Fără nume, fără judecată.
          </p>
        </div>
      </FadeUp>
      <div className="lp-story-grid">
        {LP_STORIES.map((s, i) => (
          <FadeUp key={s.quote} delay={i * 0.1} as="article" className={'lp-story' + (s.feature ? ' lp-story--feature' : '')}>
            <span className="lp-story__tag">{s.cat}</span>
            <p className="lp-story__quote">„{s.quote}”</p>
            <span className="lp-story__who">{s.who}</span>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

/* ───────────── scrisoarea fondatoarei ───────────── */
function LpFounder() {
  return (
    <section className="lp-founder" id="fondatoare">
      <FadeUp delay={0}>
        <div className="lp-founder__portrait">
          <img src="assets/founder-sm.jpg" alt="Laura, fondatoarea No Judge Story" />
        </div>
      </FadeUp>
      <FadeUp delay={0.15}>
        <div className="lp-founder__letter">
        <span className="lp-eyebrow lp-eyebrow--brand">Scrisoare de la fondatoare</span>
        <p className="lp-founder__hand">
          Ola chicas! Am construit locul ăsta pentru că mi-am dorit dintotdeauna
          un colț în care să pot fi sinceră fără să-mi fie teamă. Fă-ți curaj și
          deschide-te — aici e un spațiu safe.
        </p>
        <p className="lp-founder__sign">With love, Laura</p>
        <span className="lp-founder__role">fondatoare, No Judge Story</span>
        </div>
      </FadeUp>
    </section>
  );
}

/* ───────────── footer ───────────── */
function LpFooter() {
  return (
    <footer className="lp-foot">
      <div className="lp-foot__top">
        <LpLogo size={24} />
        <nav className="lp-foot__nav">
          <a href="#povesti">Povești</a>
          <a href="#categorii">Categorii</a>
          <a href="#fondatoare">Despre</a>
          <a href="#acces-anticipat">Acces anticipat</a>
        </nav>
      </div>
      <div className="lp-foot__bottom">
        <span>Un spațiu sigur pentru povești fără judecată.</span>
        <span>© 2026 No Judge Story</span>
      </div>
    </footer>
  );
}

/* ───────────── page ───────────── */
function LandingPage() {
  return (
    <div className="lp-page">
      <LandingStyles />
      <LpNav />
      <main>
        <LpHero />
        <LpPromises />
        <LpFeaturedArticles />
        <LpAbout />
        <LpStories />
        <LpFounder />
        <PreRegisterSection />
      </main>
      <LpFooter />
    </div>
  );
}

/* ───────────── styles ───────────── */
function LandingStyles() {
  return <style>{`
    .lp-page { width: 100%; overflow-x: clip; }
    .lp-page main { display: block; }

    .lp-eyebrow { font-family: var(--font-sans); font-weight: var(--fw-bold);
      font-size: var(--fs-2xs); letter-spacing: var(--ls-wide); text-transform: uppercase;
      color: var(--text-muted); }
    .lp-eyebrow--brand { color: var(--njs-rose); }

    .lp-h2 { font-family: var(--font-display); font-weight: var(--fw-bold);
      font-size: var(--fs-h1); line-height: var(--lh-tight); letter-spacing: var(--ls-tight);
      margin: 12px 0 0; color: var(--text-strong); }
    .lp-h2 em { font-style: italic;
      background: var(--njs-gradient); -webkit-background-clip: text; background-clip: text;
      -webkit-text-fill-color: transparent; }
    .lp-section-head { max-width: 640px; }
    .lp-section-sub { font-size: var(--fs-lead); line-height: var(--lh-body);
      color: var(--text-muted); margin: 16px 0 0; }


    /* ── Animații ── */
    @keyframes lp-fade-up { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:none; } }
    .anim-up { opacity:0; animation: lp-fade-up 0.7s cubic-bezier(0.22,0.61,0.36,1) forwards; }
    .anim-up-d0 { animation-delay: 0.05s; }
    .anim-up-d1 { animation-delay: 0.20s; }
    .anim-up-d2 { animation-delay: 0.36s; }
    .anim-up-d3 { animation-delay: 0.52s; }

    /* hero cards stagger */
    .lp-hc { position:relative; min-height:432px; opacity:0; animation: lp-fade-up 0.7s cubic-bezier(0.22,0.61,0.36,1) forwards; }
    .lp-hc:hover .lp-hc__img { transform: scale(1.03); }
    .lp-hc__img { transition: transform 0.5s cubic-bezier(0.22,0.61,0.36,1); }

    /* AnimatedCTA */
    .anim-cta { display:inline-flex; align-items:center; gap:12px; position:relative; overflow:hidden;
      font-family:var(--font-sans); font-size:18px; font-weight:700; color:#fff; text-decoration:none;
      background: linear-gradient(90deg,#f3486d 0%,#ea8954 100%);
      border-radius:999px; padding:19px 36px; cursor:pointer;
      box-shadow: 0 12px 32px rgba(243,72,109,0.36), inset 0 0 0 1px rgba(255,255,255,0.18);
      transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, filter 0.3s ease; }
    .anim-cta:hover { transform:translateY(-4px) scale(1.02);
      box-shadow:0 22px 50px rgba(243,72,109,0.52), inset 0 0 0 1px rgba(255,255,255,0.24); filter:saturate(1.08); }
    .anim-cta:active { transform:scale(0.97) translateY(0); }
    .anim-cta__shimmer { position:absolute; inset:0; pointer-events:none; border-radius:inherit;
      background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,0.22) 50%,transparent 65%);
      animation: anim-shimmer 3.4s ease-in-out infinite; }
    @keyframes anim-shimmer { 0%,28%{transform:translateX(-100%)} 68%,100%{transform:translateX(100%)} }
    .anim-cta__arrow { display:inline-flex; align-items:center;
      transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1); }
    .anim-cta:hover .anim-cta__arrow { transform:translateX(5px); }
    .anim-cta__label { position:relative; z-index:1; }

    /* nav */
    .lp-nav { position: sticky; top: 0; z-index: 30;
      display:flex; align-items:center; justify-content:space-between;
      max-width: 1160px; margin: 0 auto; padding: 18px 32px;
      background: rgba(255,255,255,0.72); backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(0,0,0,0.04); }
    .lp-nav__logo { text-decoration:none; }
    .lp-nav__links { display:flex; align-items:center; gap: 28px; }
    .lp-nav__links a { font-family: var(--font-sans); font-size: 15px; font-weight: var(--fw-medium);
      color: var(--text-muted); text-decoration:none; transition: color var(--dur-fast) var(--ease-soft); }
    .lp-nav__links a:hover { color: var(--text-strong); }
    .lp-nav__cta { color: var(--njs-rose-deep) !important; font-weight: var(--fw-semibold) !important;
      border: 1.5px solid var(--njs-rose); padding: 9px 18px; border-radius: var(--radius-pill); }
    .lp-nav__cta:hover { background: rgba(243,72,109,0.08); }

    /* hero (full-width; content aligned left) */
    .lp-hero { position: relative; width: 100%; max-width: none; margin: 0; padding: 52px 0 84px; }
    .lp-hero__wash { position:absolute; inset:0; z-index:0; pointer-events:none;
      background:
        radial-gradient(640px 440px at 50% -70px, rgba(243,72,109,0.15), transparent 70%),
        radial-gradient(540px 440px at 10% 2%, rgba(234,137,84,0.17), transparent 64%),
        radial-gradient(540px 440px at 90% 4%, rgba(243,72,109,0.13), transparent 64%); }
    .lp-hero__head { position: relative; z-index:1; text-align:center; max-width: 900px; margin: 0 auto; }
    .lp-hero__title { font-family: var(--font-display); font-style: italic; font-weight: var(--fw-semibold);
      font-size: clamp(36px, 4.4vw, 58px); line-height: 1.08; letter-spacing: var(--ls-tight);
      margin: 0; color: var(--text-strong); }
    .lp-hero__title em { font-style: italic; }
    
    .lp-hero__title .c-rose { color: var(--njs-rose); }
    .lp-hero__title .c-grad { background: var(--njs-gradient); -webkit-background-clip: text;
      background-clip: text; -webkit-text-fill-color: transparent; }
    .lp-hero__sub { font-family: var(--font-sans); font-size: var(--fs-lead); line-height: var(--lh-body);
      color: var(--text-muted); margin: 24px auto 0; max-width: 52ch; }
    .lp-hero__cta { display:flex; align-items:center; justify-content:center; gap: 24px;
      flex-wrap: wrap; margin: 32px 0 0; }
    .lp-hero__proof { display:flex; align-items:center; gap: 12px; font-size: var(--fs-sm); color: var(--text-muted); }
    .lp-hero__proof strong { color: var(--text-strong); font-weight: var(--fw-bold); }

    .lp-hero__cards { position: relative; z-index:1; display:grid; grid-template-columns: repeat(4, 1fr);
      gap: 22px; margin-top: 58px; align-items: start; padding: 0 32px; }

    .lp-hc:nth-child(even) { margin-top: 60px; }
    .lp-hc__img { position:absolute; inset:0; border-radius: var(--radius-lg);
      background-size: cover; background-position: center; box-shadow: var(--shadow-md); }
    .lp-hc__av { position:absolute; top: 16px; right: 16px; z-index:3; width: 48px; height: 48px;
      border-radius:50%; object-fit:cover; border: 2.5px solid #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.32); }
    .lp-hc__panel { position:absolute; left: 12px; right: 12px; bottom: 12px; z-index:2;
      border-radius: 22px; padding: 30px 20px 20px; min-height: 58%;
      display:flex; flex-direction:column; justify-content:flex-end;
      background: linear-gradient(180deg, rgba(34,18,20,0) 0%, rgba(28,12,14,0.55) 36%, rgba(18,7,9,0.9) 100%); }
    .lp-hc__q { font-family: var(--font-display); font-style: italic; font-weight: var(--fw-semibold);
      font-size: 21px; line-height: 1.25; color:#fff; margin: 0 0 8px;
      text-shadow: 0 2px 14px rgba(0,0,0,0.4); }
    .lp-hc__b { font-family: var(--font-sans); font-size: 12.5px; line-height: 1.5;
      color: rgba(255,255,255,0.82); margin: 0; }

    /* promises strip */
    .lp-promises { display:flex; align-items:center; justify-content:center; flex-wrap: wrap;
      gap: 18px; max-width: 1160px; margin: 0 auto; padding: 22px 32px 56px; }
    .lp-promises__item { font-family: var(--font-display); font-style: italic;
      font-size: 22px; color: var(--text-body); }
    .lp-promises__dot { width:6px; height:6px; border-radius:50%; background: var(--njs-rose); opacity: .6; }

    /* featured articles */
    .lp-fa { max-width: 1160px; margin: 0 auto; padding: 72px 32px 40px; }

    .lp-fa__title { font-family: var(--font-display); font-weight: var(--fw-bold);
      font-size: clamp(26px, 3.5vw, 46px); line-height: 1.18; letter-spacing: var(--ls-tight);
      color: var(--text-strong); margin: 0; }
    .lp-fa__em-rose { font-style: italic; color: var(--njs-rose);
      -webkit-text-fill-color: var(--njs-rose); background: none; }
    .lp-fa__em-dark { font-style: italic; color: var(--text-strong);
      -webkit-text-fill-color: var(--text-strong); background: none; }
    .lp-fa__em-grad { font-style: italic;
      background: var(--njs-gradient); -webkit-background-clip: text;
      background-clip: text; -webkit-text-fill-color: transparent; }
    .lp-fa__discover { display: inline-block; font-family: var(--font-sans);
      font-size: var(--fs-sm); color: var(--text-muted); text-decoration: none;
      border-bottom: 1px solid var(--border-subtle); padding-bottom: 2px;
      margin: 20px 0 48px; transition: color var(--dur-fast); }
    .lp-fa__discover:hover { color: var(--njs-rose-deep); border-color: var(--njs-rose-deep); }

    .lp-fa__row1 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; margin-bottom: 36px; }
    .lp-fa__row2 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; }

    .lp-fa__card { display: flex; flex-direction: column; gap: 10px; }
    .lp-fa__card-img { width: 100%; object-fit: cover; border-radius: var(--radius-lg);
      display: block; aspect-ratio: 4 / 3; }
    .lp-fa__card--lg .lp-fa__card-img { aspect-ratio: 1 / 1.05; }
    .lp-fa__card-title { font-family: var(--font-sans); font-weight: var(--fw-bold);
      font-size: var(--fs-body); line-height: 1.35; color: var(--text-strong); margin: 4px 0 0; }
    .lp-fa__card-title--lg { font-size: var(--fs-lead); }
    .lp-fa__card-excerpt { font-family: var(--font-sans); font-size: var(--fs-sm);
      line-height: 1.55; color: var(--text-muted); margin: 0; }
    .lp-fa__card-meta { font-family: var(--font-sans); font-size: var(--fs-xs);
      color: var(--text-muted); margin-top: 2px; }

    .lp-fa__mini-box { border: 1.5px solid var(--border-subtle); border-radius: var(--radius-lg);
      padding: 24px 20px; display: flex; flex-direction: column; }
    .lp-fa__mini { display: flex; flex-direction: column; gap: 10px; }
    .lp-fa__mini-top { display: flex; gap: 12px; align-items: flex-start; }
    .lp-fa__mini-title { font-family: var(--font-sans); font-weight: var(--fw-bold);
      font-size: var(--fs-sm); line-height: 1.35; color: var(--text-strong); margin: 0; flex: 1; }
    .lp-fa__mini-img { width: 68px; height: 68px; object-fit: cover;
      border-radius: var(--radius-sm); flex-shrink: 0; }
    .lp-fa__mini-excerpt { font-family: var(--font-sans); font-size: 11.5px;
      line-height: 1.55; color: var(--text-muted); margin: 0; }
    .lp-fa__mini-sep { border: none; border-top: 1px solid var(--border-subtle); margin: 16px 0; }

    /* despre / stats */
    .lp-about { position: relative; background: var(--surface-soft); overflow: hidden;
      padding: 80px 32px 72px; text-align: center; }
    .lp-about__deco { position: absolute; top: 0; right: 32px; width: 160px; height: 200px;
      pointer-events: none; }
    .lp-about__title { font-family: var(--font-display); font-weight: var(--fw-bold);
      font-size: clamp(32px, 4vw, 54px); line-height: 1.12; letter-spacing: var(--ls-tight);
      color: var(--text-strong); margin: 0 auto 20px; max-width: 700px; }
    .lp-about__sub { font-family: var(--font-display); font-weight: var(--fw-semibold);
      font-size: clamp(17px, 2vw, 22px); line-height: 1.45; color: var(--text-body);
      margin: 0 auto 56px; max-width: 640px; }

    .lp-about__stats { display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 24px; max-width: 860px; margin: 0 auto; }
    .lp-about__stat { display: flex; flex-direction: column; gap: 6px; }
    .lp-about__stat-num { font-family: var(--font-display); font-weight: var(--fw-extrabold);
      font-size: clamp(32px, 3.5vw, 46px); line-height: 1; color: var(--text-strong); }
    .lp-about__stat-label { font-family: var(--font-sans); font-size: var(--fs-sm);
      color: var(--text-muted); }

    .lp-about__divider { border: none; border-top: 1px solid var(--border-subtle);
      margin: 48px auto; max-width: 1040px; }

    .lp-about__desc { display: grid; grid-template-columns: 1fr 2fr;
      gap: 40px; max-width: 1040px; margin: 0 auto; text-align: left; }
    .lp-about__desc-head { font-family: var(--font-display); font-weight: var(--fw-bold);
      font-size: var(--fs-h3); line-height: 1.2; color: var(--text-strong); margin: 0; }
    .lp-about__desc-body { font-family: var(--font-sans); font-size: var(--fs-lead);
      line-height: var(--lh-body); color: var(--text-body); margin: 0; }

    /* povești */
    .lp-stories { max-width: 1160px; margin: 0 auto; padding: 40px 32px 80px; }
    .lp-story-grid { display:grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 36px; }
    .lp-story { position: relative; background: var(--surface-card); border-radius: var(--radius-lg);
      padding: 32px 30px; box-shadow: var(--ring-subtle);
      display:flex; flex-direction:column; gap: 18px; min-height: 290px;
      transition: transform var(--dur-med) var(--ease-soft), box-shadow var(--dur-med); }
    .lp-story:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
    .lp-story--feature { background: var(--njs-wash); box-shadow: var(--ring-brand);
      grid-row: span 1; }
    .lp-story__tag { align-self:flex-start; font-family: var(--font-sans); font-size: var(--fs-2xs);
      font-weight: var(--fw-bold); letter-spacing: var(--ls-wide); text-transform: uppercase; white-space: nowrap;
      color: var(--njs-rose-deep); background: rgba(243,72,109,0.10); border: 1px solid rgba(243,72,109,0.22);
      padding: 6px 12px; border-radius: var(--radius-pill); }
    .lp-story__quote { font-family: var(--font-display); font-style: italic; font-weight: var(--fw-medium);
      font-size: 24px; line-height: 1.32; color: var(--text-strong); margin: 0; flex: 1; }
    .lp-story__who { font-family: var(--font-sans); font-size: var(--fs-sm); font-weight: var(--fw-medium);
      color: var(--text-muted); }

    /* founder */
    .lp-founder { max-width: 1060px; margin: 0 auto; padding: 64px 32px;
      display:grid; grid-template-columns: 0.85fr 1.15fr; gap: 48px; align-items: center; }
    .lp-founder__portrait { border-radius: var(--radius-lg); overflow:hidden; box-shadow: var(--shadow-md);
      aspect-ratio: 4 / 5; }
    .lp-founder__portrait img { width:100%; height:100%; object-fit: cover; object-position: center 28%; display:block; }
    .lp-founder__hand { font-family: var(--font-hand); font-size: 30px; line-height: 1.5;
      color: var(--text-body); margin: 18px 0 0; }
    .lp-founder__sign { font-family: var(--font-hand); font-size: 28px; color: var(--njs-rose-deep);
      margin: 18px 0 0; }
    .lp-founder__role { font-family: var(--font-sans); font-size: var(--fs-sm); color: var(--text-muted); }

    /* footer */
    .lp-foot { max-width: 1160px; margin: 0 auto; padding: 48px 32px 56px; }
    .lp-foot__top { display:flex; align-items:center; justify-content:space-between; gap: 20px;
      flex-wrap: wrap; padding-bottom: 26px; border-bottom: 1px solid var(--border-subtle); }
    .lp-foot__nav { display:flex; gap: 24px; flex-wrap: wrap; }
    .lp-foot__nav a { font-family: var(--font-sans); font-size: var(--fs-sm); color: var(--text-muted);
      text-decoration:none; transition: color var(--dur-fast); }
    .lp-foot__nav a:hover { color: var(--njs-rose-deep); }
    .lp-foot__bottom { display:flex; align-items:center; justify-content:space-between; gap: 16px;
      flex-wrap: wrap; margin-top: 22px; font-family: var(--font-sans); font-size: var(--fs-sm);
      color: var(--text-muted); }

    /* responsive */
    @media (max-width: 960px){
      .lp-hero__cards { grid-template-columns: 1fr 1fr; gap: 18px; }
      .lp-hc:nth-child(even) { margin-top: 0; }
      .lp-hc:nth-child(2), .lp-hc:nth-child(4) { margin-top: 48px; }
      .lp-founder { grid-template-columns: 1fr; gap: 32px; }
      .lp-founder__portrait { max-width: 360px; }
      .lp-story-grid { grid-template-columns: 1fr 1fr; }
      .lp-story--feature { grid-column: span 2; }
      .lp-fa__row1 { grid-template-columns: 1fr 1fr; }
      .lp-fa__mini-box { grid-column: span 2; }
      .lp-fa__row2 { grid-template-columns: 1fr 1fr; }
      .lp-about__stats { grid-template-columns: 1fr 1fr; gap: 20px; }
      .lp-about__desc { grid-template-columns: 1fr; gap: 16px; }
    }
    @media (max-width: 700px){
      .lp-nav__links a:not(.lp-nav__cta) { display:none; }
    }
    @media (max-width: 600px){
      .lp-hero { padding: 36px 20px 56px; }
      .lp-hero__title { font-size: 38px; }
      .lp-h2 { font-size: 34px; }
      .lp-fa, .lp-stories, .lp-founder { padding-left: 20px; padding-right: 20px; }
      .lp-story-grid { grid-template-columns: 1fr; }
      .lp-story--feature { grid-column: span 1; }
      .lp-fa__row1, .lp-fa__row2 { grid-template-columns: 1fr; }
      .lp-about { padding: 56px 20px 52px; }
      .lp-about__deco { width: 100px; height: 130px; }
      .lp-about__stats { grid-template-columns: 1fr 1fr; }
      .lp-fa__mini-box { grid-column: span 1; }
      .lp-hero__cards { grid-template-columns: 1fr; gap: 16px; }
      .lp-hc:nth-child(2), .lp-hc:nth-child(4) { margin-top: 0; }
      .lp-hc { min-height: 380px; }
      .lp-promises__item { font-size: 18px; }
      .lp-foot { padding: 40px 20px; }
    }
  `}</style>;
}

export default LandingPage;
