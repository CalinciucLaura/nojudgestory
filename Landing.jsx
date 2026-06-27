// No Judge Story — Landing page

import { Logo as LpLogo, Button as LpButton, TopicChip as LpTopicChip, AvatarStack as LpAvatarStack } from './ds';
import { PreRegisterSection } from './PreRegister';
import { STORIES } from './StoriesData';

const LP_AVATARS = [1, 2, 3, 4].map((n) => `assets/avatar-${n}.jpg`);

const LP_FA_LARGE = STORIES.filter(s => ['relatie-6-ani', 'maternitate-singuratatate'].includes(s.id));
const LP_FA_MINI = STORIES.filter(s => ['demisie-fara-job', 'imagine-de-sine', 'anxietate'].includes(s.id));
const LP_FA_BOTTOM = STORIES.filter(s => ['prietenie-pierduta', 'la-40-de-ani', 'burnout'].includes(s.id));

const LP_STORIES = [
  {
    cat: 'relații',
    quote: 'Credeam că sunt singura care simte așa. Aici am citit zeci de povești care erau, de fapt, a mea.',
    who: 'anonim · 29 de ani',
    feature: false,
  },
  {
    cat: 'viața de mămică',
    quote: 'nu în sensul că nu am avut oameni în jurul meu, ci în sensul că nimeni nu părea să mă vadă cu adevărat. Eram prezentă în toate pozele, la toate mesele, la toate evenimentele, și totuși simțeam că dacă aș dispărea, lumea ar continua la fel. A durat mult să înțeleg că singurătatea nu e absența oamenilor, e absența conexiunii reale. Și că merităm cu toții să fim văzute, nu doar prezente.',
    who: 'anonim · 34 de ani',
    feature: true,
  },
  {
    cat: 'carieră',
    quote: 'Nimeni nu îți spune că e normal să nu știi ce vrei. Că poți avea 25, 30 sau 40 de ani și să fii în continuare în căutare. Nu ești în urmă și nu ai ratat nimic. Ești exact unde trebuie să fii pentru că fiecare experiență, chiar și cele care nu ți s-au potrivit, te-au adus mai aproape de tine. Claritatea vine din mișcare, nu din așteptare.',
    who: 'anonim · 41 de ani',
    feature: false,
  },
];

const LP_PROMISES = ['anonim', 'fără critici', 'fără judecată', 'spațiu safe'];

/* ───────────── scroll helper (avoids HashRouter conflict) ───────────── */
function scrollTo(id) {
  return (e) => {
    e.preventDefault();
    const el = id === 'top' ? document.body : document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}

/* ───────────── nav ───────────── */
function LpNav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`lp-nav${scrolled ? ' lp-nav--scrolled' : ''}`}>
      <a href="#top" className="lp-nav__logo" aria-label="No Judge Story" onClick={scrollTo('top')}><img src="assets/logo.png" alt="No Judge Story" className="lp-nav__logo-img" /></a>
      <nav className="lp-nav__links">
        <a href="#povesti" onClick={scrollTo('povesti')}>Povești</a>
        <a href="#categorii" onClick={scrollTo('categorii')}>Categorii</a>
        <a href="#fondatoare" onClick={scrollTo('fondatoare')}>Despre</a>
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
    img: 'assets/child.jpg', av: 'assets/avatar-1.jpg',
    quote: 'Divorțul nu înseamnă că ai eșuat',
    body: 'Divorțul nu înseamnă că ai eșuat, înseamnă că ai ales să nu mai trăiești într-o variantă greșită a vieții tale. Ca mamă singură, o să ai zile în care te simți copleșită și zile în care o să realizezi cât de mult poți duce pe umerii tăi. Permite-ți ambele. Copilul tău nu are nevoie de o mamă perfectă, are nevoie de o mamă prezentă și sinceră, iar tu ești deja asta. Ia-o o zi pe rând, cere ajutor fără să te simți vinovată și nu uita că grija față de tine nu e un lux, e o necesitate.',
  },
  {
    img: 'assets/friends.jpg', av: 'assets/avatar-2.jpg',
    quote: 'Cum va mai faceti prieteni dupa 25 de ani?',
    body: 'După 25 de ani, lumea îți spune că e greu să-ți mai faci prieteni noi și sincer, are dreptate că e diferit. Dar diferit nu înseamnă imposibil. Înseamnă că acum alegi mai conștient, că nu mai aștepți ca magia să se întâmple de la sine, ci ieși în întâmpinarea ei. Prieteniile de după 25 de ani nu sunt mai puțin autentice, sunt mai câștigate. Și tocmai de aceea valorează mai mult.'
  },
  {
    img: 'assets/woman2.jpg', av: 'assets/avatar-3.jpg',
    quote: 'M-am obișnuit cu ideea că o sa fiu singura o perioada lunga',
    body: 'Să te obișnuiești cu ideea că vei fi singură o perioadă poate părea o formă de protecție după dezamăgiri, dar e important să nu o transformi într-o concluzie despre viitorul tău. Poți să accepți cum stau lucrurile acum fără să crezi că așa vor rămâne mereu. Faptul că ești singură în acest moment nu înseamnă că nu vei mai avea relații sau că nu vei întâlni pe cineva potrivit, ci doar că treci printr-o etapă în care ești mai precaută și ai nevoie de timp.',
  },
  {
    img: 'assets/woman.jpg', av: 'assets/avatar-4.jpg',
    quote: 'Toată viața mea am fost singură',
    body: 'nu în sensul că nu am avut oameni în jurul meu, ci în sensul că nimeni nu părea să mă vadă cu adevărat. Eram prezentă în toate pozele, la toate mesele, la toate evenimentele, și totuși simțeam că dacă aș dispărea, lumea ar continua la fel. A durat mult să înțeleg că singurătatea nu e absența oamenilor, e absența conexiunii reale. Și că merităm cu toții să fim văzute, nu doar prezente.',
  },
];

function LpHero() {
  const go = scrollTo('acces-anticipat');
  return (
    <section className="lp-hero" id="top">
      <div className="lp-hero__wash" aria-hidden="true" />
      <img className="lp-hero__subtract" src="assets/Subtract.png" alt="" aria-hidden="true" />

      <div className="lp-hero__head">
        <h1 className="lp-hero__title anim-up anim-up-d0">
          Un <em className="c-rose">spațiu sigur</em><br />
          pentru <em className="c-grad">povești fără judecată</em>
        </h1>
        <p className="lp-hero__sub anim-up anim-up-d2">
          Pentru că unele lucruri nu pot fi spuse cu voce tare, dar pot fi scrise
        </p>
        <div className="lp-hero__cta anim-up anim-up-d3">
          <div className="lp-hero__email-wrap">
            <input
              className="lp-hero__email-input"
              type="email"
              placeholder="adresa ta de email"
              aria-label="Email"
            />
            <AnimatedCTA href="#acces-anticipat" onClick={go}>
              Vreau acces anticipat
            </AnimatedCTA>
          </div>
          <span className="lp-hero__proof">
            <LpAvatarStack avatars={LP_AVATARS} more="+180" size={34} light={false} />
            <span>femei deja pe listă</span>
          </span>
        </div>
      </div>

      <div className="lp-hero__cards">
        {LP_HERO_CARDS.map((c, i) => (
          <article className="lp-hc" key={i} style={{ animationDelay: (0.62 + i * 0.15) + 's' }}>
            <div className="lp-hc__img" style={{ backgroundImage: `url(${c.img})` }} />
            <img className="lp-hc__av" src={c.av} alt="" />
            <div className="lp-hc__panel">
              <p className='lp-hc__q'>„{c.quote}”</p>
              <p className='lp-hc__b'>{c.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


/* ───────────── featured articles ───────────── */
function LpFeaturedArticles({ onOpen, onReadMore }) {
  return (
    <section className="lp-fa" id="categorii">
      <FadeUp>
        <h2 className="lp-fa__title">
          Prima comunitate care își dorește să susțină<br />
          <em className="lp-fa__em-rose">femeile</em>{' '}
          <em className="lp-fa__em-dark">în a-și exprima</em>{' '}
          <em className="lp-fa__em-grad">poveștile de viață</em>
        </h2>
      </FadeUp>

      <div className="lp-fa__row1">
        {LP_FA_LARGE.map((a, i) => (
          <FadeUp key={i} delay={i * 0.1} as="article" className="lp-fa__card lp-fa__card--lg lp-fa__card--click" onClick={() => onOpen(a.id)}>
            <img className="lp-fa__card-img" src={a.img} alt="" />
            <h3 className="lp-fa__card-title lp-fa__card-title--lg">{a.title}</h3>
            <p className="lp-fa__card-excerpt">{a.excerpt}</p>
            <div className="lp-fa__card-foot">
              <span className="lp-fa__card-meta">{a.date} · {a.read}</span>
              <button className="lp-fa__read-more" onClick={(e) => { e.stopPropagation(); onReadMore(); }}>Citește mai mult</button>
            </div>
          </FadeUp>
        ))}
        <FadeUp delay={0.2} className="lp-fa__mini-box">
          {LP_FA_MINI.map((a, i) => (
            <article key={i} className="lp-fa__mini lp-fa__card--click" onClick={() => onOpen(a.id)}>
              <div className="lp-fa__mini-body">
                <img className="lp-fa__mini-img" src={a.img} alt="" />
                <h3 className="lp-fa__mini-title">{a.title}</h3>
                <p className="lp-fa__mini-excerpt">{a.excerpt}</p>
              </div>
              <button className="lp-fa__read-more" onClick={(e) => { e.stopPropagation(); onReadMore(); }}>Citește mai mult</button>
              {i < LP_FA_MINI.length - 1 && <hr className="lp-fa__mini-sep" />}
            </article>
          ))}
        </FadeUp>
      </div>

      <div className="lp-fa__row2">
        {LP_FA_BOTTOM.map((a, i) => (
          <FadeUp key={i} delay={i * 0.1} as="article" className="lp-fa__card lp-fa__card--click" onClick={() => onOpen(a.id)}>
            <img className="lp-fa__card-img" src={a.img} alt="" />
            <h3 className="lp-fa__card-title">{a.title}</h3>
            <p className="lp-fa__card-excerpt">{a.excerpt}</p>
            <div className="lp-fa__card-foot">
              <span className="lp-fa__card-meta">{a.date} · {a.read}</span>
              <button className="lp-fa__read-more" onClick={(e) => { e.stopPropagation(); onReadMore(); }}>Citește mai mult</button>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

/* ───────────── despre / stats ───────────── */
const LP_STATS = [
  { num: '100%', label: 'anonim' },
  { num: 'Zero', label: 'judecăți' },
  { num: 'Safe', label: 'spațiu protejat' },
  { num: 'Real', label: 'povești de viață' },
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
          Pentru poveștile care merită să fie spuse, dar nu știau unde.
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
Există momente când ai nevoie de un loc unde sinceritatea nu te costă nimic. NoJudgeStory e acea comunitate, un spațiu creat de femei pentru femei, unde poveștile de viață sunt împărtășite cu curaj și primite cu respect. Aici nu există judecată, există doar oameni care se înțeleg pentru că au trecut prin lucruri asemănătoare.
          </p>
        </div>
      </FadeUp>
    </section>
  );
}

/* ───────────── povești ───────────── */
const LP_CATEGORIES = [
  { label: 'căsnicie', img: 'assets/marriage.jpg' },
  { label: 'prietenii', img: 'assets/friends2.jpg' },
  { label: 'viața de mămică', img: 'assets/motherhood.jpg' },
  { label: 'carieră', img: 'assets/boss.jpg' },
  { label: 'relații', img: 'assets/relationship.jpg' },
  { label: 'despre mine', img: 'assets/beauty.jpg' },
];

function LpCategories() {
  return (
    <section className='lp-cats' id='povesti'>
      <FadeUp>
        <h2 className='lp-cats__title'>Împărtășește din experiențele tale</h2>
      </FadeUp>
      <FadeUp delay={0.08} className='lp-cats__grid'>
        {LP_CATEGORIES.map((c) => (
          <div className='lp-cat-card' key={c.label}>
            <div className='lp-cat-card__img' style={{ backgroundImage: `url(${c.img})` }} />
            <div className='lp-cat-card__overlay' />
            <span className='lp-cat-card__label'>{c.label}</span>
          </div>
        ))}
      </FadeUp>
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
          <span className="lp-eyebrow lp-eyebrow--brand">Scrisoare de la mine, pentru tine</span>
          <p className="lp-founder__hand">
            Te încurajez și pe tine să scrii, chiar dacă simți că nu ai talent. Sinceră să fiu, nici eu nu am, dar îmi place să-mi exprim gândurile și știu că și tu simți la fel. <br />
            Am creat NoJudgeStory, o comunitate unde îți poți împărtăși povestile de viata fără teama de a fi judecat/a.
            Povestește-ne despre tine, despre ceea ce simti, gandesti sau despre provocările prin care ai trecut, povestea ta poate inspira alte persoane din această comunitate mai mult decat crezi.
            Aici ne ghidam dupa o regula principala „Nu ne judecăm”, consideram ca orice lucru poate fi frumos spus, cu respect si fara jigniri.
            <br />
            <br />
            Bine ai venit in comunitate! ;)
            <br />
            <br />
            With love,
            Laura
          </p>
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
          <a href="#povesti" onClick={scrollTo('povesti')}>Povești</a>
          <a href="#categorii" onClick={scrollTo('categorii')}>Categorii</a>
          <a href="#fondatoare" onClick={scrollTo('fondatoare')}>Despre</a>
          <a href="#acces-anticipat" onClick={scrollTo('acces-anticipat')}>Acces anticipat</a>
        </nav>
      </div>
      <div className="lp-foot__bottom">
        <span>Un spațiu sigur pentru povești fără judecată.</span>
        <span>© 2026 No Judge Story</span>
      </div>
    </footer>
  );
}

/* ───────────── pre-register modal ───────────── */
function PreRegModal({ onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="lp-modal-overlay" onClick={onClose}>
      <div className="lp-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="lp-modal-close" onClick={onClose} aria-label="Inchide">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
        <PreRegisterSection />
      </div>
    </div>
  );
}

/* ───────────── page ───────────── */
function LandingPage() {
  const [showPreReg, setShowPreReg] = React.useState(false);
  return (
    <div className="lp-page">
      <LandingStyles />
      <LpNav />
      <main>
        <LpHero />

        <LpFeaturedArticles onOpen={() => setShowPreReg(true)} onReadMore={() => setShowPreReg(true)} />
        <LpAbout />
        <LpCategories />
        <LpFounder />
        <PreRegisterSection />
      </main>
      <LpFooter />
      {showPreReg && <PreRegModal onClose={() => setShowPreReg(false)} />}
    </div>
  );
}

/* ───────────── styles ───────────── */
function LandingStyles() {
  return <style>{`
    .lp-page { width: 100%; overflow-x: clip; margin: 0; padding: 0; }
    .lp-page main { display: block; margin: 0; padding: 0; }

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
    .anim-cta { display:inline-flex; align-items:center; gap:8px; position:relative; overflow:hidden;
      font-family:var(--font-sans); font-size:14px; font-weight:700; color:#fff; text-decoration:none;
      background: linear-gradient(90deg,#f3486d 0%,#ea8954 100%);
      border-radius:999px; padding:14px 22px; cursor:pointer; white-space:nowrap;
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
      padding: 18px 32px;
      background: transparent;
      transition: background 0.25s ease, box-shadow 0.25s ease; }
    .lp-nav--scrolled { background: #fff; box-shadow: 0 1px 16px rgba(0,0,0,0.08); }
    .lp-nav__logo { text-decoration:none; }
    .lp-nav__logo-img { height: 36px; width: auto; display: block; }
    .lp-nav__links { display:flex; align-items:center; gap: 28px; }
    .lp-nav__links a { font-family: var(--font-sans); font-size: 15px; font-weight: var(--fw-medium);
      color: var(--text-muted); text-decoration:none; transition: color var(--dur-fast) var(--ease-soft); }
    .lp-nav__links a:hover { color: var(--text-strong); }
    .lp-nav__cta { color: var(--njs-rose-deep) !important; font-weight: var(--fw-semibold) !important;
      border: 1.5px solid var(--njs-rose); padding: 9px 18px; border-radius: var(--radius-pill); }
    .lp-nav__cta:hover { background: rgba(243,72,109,0.08); }

    /* hero (full-width; content aligned left) */
    .lp-hero { position: relative; width: 100%; max-width: none; margin-top: -76px; padding: calc(52px + 76px) 0 84px; }
    .lp-hero__subtract { position:absolute; inset:0; width:100%; height:100%;
      object-fit:cover; object-position:center; z-index:0; pointer-events:none; }
    .lp-hero__wash { position:absolute; inset:0; z-index:1; pointer-events:none;
      background:
        radial-gradient(640px 440px at 50% -70px, rgba(243,72,109,0.15), transparent 70%),
        radial-gradient(540px 440px at 10% 2%, rgba(234,137,84,0.17), transparent 64%),
        radial-gradient(540px 440px at 90% 4%, rgba(243,72,109,0.13), transparent 64%); }
    .lp-hero__head { position: relative; z-index:2; text-align:center; max-width: 900px; margin: 0 auto; }
    .lp-hero__title { font-family: var(--font-display); font-style: italic; font-weight: var(--fw-semibold);
      font-size: clamp(36px, 4.4vw, 58px); line-height: 1.08; letter-spacing: var(--ls-tight);
      margin: 0; color: var(--text-strong); }
    .lp-hero__title em { font-style: italic; }
    
    .lp-hero__title .c-rose { color: var(--njs-rose); }
    .lp-hero__title .c-grad { background: var(--njs-gradient); -webkit-background-clip: text;
      background-clip: text; -webkit-text-fill-color: transparent; }
    .lp-hero__sub { font-family: var(--font-sans); font-size: var(--fs-lead); line-height: var(--lh-body);
      color: var(--text-muted); margin: 24px auto 0; max-width: 52ch; }
    .lp-hero__cta { display:flex; flex-direction:column; align-items:center; gap: 16px; margin: 32px 0 0; }
    .lp-hero__email-wrap { display:flex; flex-direction:row; align-items:center; gap: 10px; width: 100%; max-width: 700px; }
    .lp-hero__email-input { flex: 1; padding: 16px 22px; font-family: var(--font-sans);
      font-size: var(--fs-body); color: var(--text-strong);
      background: #fff; border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-pill); outline: none;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      transition: border-color 0.2s, box-shadow 0.2s; }
    .lp-hero__email-input::placeholder { color: var(--text-muted); }
    .lp-hero__email-input:focus { border-color: var(--njs-rose); box-shadow: 0 0 0 3px rgba(243,72,109,0.15); }
    .lp-hero__proof { display:flex; align-items:center; gap: 12px; font-size: var(--fs-sm); color: var(--text-muted); }
    .lp-hero__proof strong { color: var(--text-strong); font-weight: var(--fw-bold); }

    .lp-hero__cards { position: relative; z-index:2; display:grid; grid-template-columns: repeat(4, 1fr);
      gap: 22px; margin-top: 58px; align-items: start; padding: 0 32px; }

    .lp-hc:nth-child(even) { margin-top: 60px; }
    .lp-hc__img { position:absolute; inset:0; border-radius: var(--radius-lg);
      background-size: cover; background-position: center; box-shadow: var(--shadow-md); }
    .lp-hc__av { position:absolute; top: 16px; right: 16px; z-index:3; width: 48px; height: 48px;
      border-radius:50%; object-fit:cover; border: 2.5px solid #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.32); }
    .lp-hc__panel { position:absolute; left: 0; right: 0; bottom: 0; z-index:2;
      border-radius: 22px; padding: 30px 20px 20px; min-height: 58%;
      display:flex; flex-direction:column; justify-content:flex-end;
      background: linear-gradient(180deg, rgba(34,18,20,0) 0%, rgba(28,12,14,0.55) 36%, rgba(18,7,9,0.9) 100%); }
    .lp-hc__q { font-family: var(--font-display); font-style: italic; font-weight: var(--fw-semibold);
      font-size: 21px; line-height: 1.25; color:#fff; margin: 0 0 8px;
      text-shadow: 0 2px 14px rgba(0,0,0,0.4); }
    .lp-hc__b { font-family: var(--font-sans); font-size: 12.5px; line-height: 1.5;
      color: rgba(255,255,255,0.82); margin: 0; }


    /* featured articles */
    .lp-fa { max-width: 1160px; margin: 0 auto; padding: 0 32px 40px; }

    .lp-fa__title { font-family: var(--font-display); font-weight: var(--fw-bold);
      font-size: clamp(26px, 3.5vw, 46px); line-height: 1.18; letter-spacing: var(--ls-tight);
      color: var(--text-strong); margin-bottom: 70px;}
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

    .lp-fa__card--click { cursor: pointer; }
    .lp-fa__card--click:hover .lp-fa__card-img,
    .lp-fa__card--click:hover .lp-fa__mini-img { opacity: 0.88; transition: opacity 0.2s; }
    .lp-fa__card--click:hover .lp-fa__card-title,
    .lp-fa__card--click:hover .lp-fa__mini-title { color: var(--njs-rose-deep); transition: color 0.2s; }
    .lp-fa__card { display: flex; flex-direction: column; gap: 10px; }
    .lp-fa__card-img { width: 100%; object-fit: cover; border-radius: var(--radius-lg);
      display: block; aspect-ratio: 4 / 3; }
    .lp-fa__card--lg .lp-fa__card-img { aspect-ratio: 1 / 1.05; }
    .lp-fa__card-title { font-family: var(--font-sans); font-weight: var(--fw-bold);
      font-size: var(--fs-body); line-height: 1.35; color: var(--text-strong); margin: 4px 0 0; }
    .lp-fa__card-title--lg { font-size: var(--fs-lead); }
    .lp-fa__card-excerpt { font-family: var(--font-sans); font-size: var(--fs-sm);
      line-height: 1.55; color: var(--text-muted); margin: 0;
      display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    .lp-fa__card-foot { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 2px; }
    .lp-fa__card-meta { font-family: var(--font-sans); font-size: var(--fs-xs); color: var(--text-muted); }
    .lp-fa__read-more { background: none; border: none; padding: 0; font-family: var(--font-sans);
      font-size: var(--fs-xs); font-weight: var(--fw-semibold); color: var(--njs-rose-deep);
      cursor: pointer; text-decoration: underline; text-underline-offset: 3px;
      white-space: nowrap; transition: color 0.2s; }
    .lp-fa__read-more:hover { color: var(--njs-rose); }

    .lp-fa__mini-box { border: 1.5px solid var(--border-subtle); border-radius: var(--radius-lg);
      padding: 24px 20px; display: flex; flex-direction: column; }
    .lp-fa__mini { display: flex; flex-direction: column; gap: 10px; }
    .lp-fa__mini-body { overflow: hidden; }
    .lp-fa__mini-img { float: right; width: 68px; height: 68px; object-fit: cover;
      border-radius: var(--radius-sm); margin-left: 12px; }
    .lp-fa__mini-title { font-family: var(--font-sans); font-weight: var(--fw-bold);
      font-size: var(--fs-sm); line-height: 1.35; color: var(--text-strong); margin: 0 0 6px; }
    .lp-fa__mini-excerpt { font-family: var(--font-sans); font-size: 11.5px;
      line-height: 1.55; color: var(--text-muted); margin: 0;
      display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
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

    /* categories */
    .lp-cats { position: relative; width: 100%; padding: 40px 0 20px; }
    .lp-cats__title { font-family: var(--font-display); font-style: italic; font-weight: var(--fw-semibold);
      font-size: clamp(28px, 3vw, 42px); color: var(--text-strong);
      max-width: 1160px; margin: 0 auto 24px; padding: 0 32px; }
    .lp-cats__grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; max-width: 1160px; margin: 0 auto; padding: 0 32px; }

    .lp-cat-card { position: relative; border-radius: 12px; overflow: hidden;
      aspect-ratio: 2 / 3; cursor: pointer;
      box-shadow: 0 4px 18px rgba(0,0,0,0.10);
      transition: transform 0.4s cubic-bezier(0.22,0.61,0.36,1), box-shadow 0.4s ease; }
    .lp-cat-card:hover { transform: translateY(-5px); box-shadow: 0 14px 36px rgba(0,0,0,0.18); }
    .lp-cat-card__img { position: absolute; inset: 0;
      background-size: cover; background-position: center;
      transition: transform 0.55s cubic-bezier(0.22,0.61,0.36,1); }
    .lp-cat-card:hover .lp-cat-card__img { transform: scale(1.07); }
    .lp-cat-card__overlay { position: absolute; inset: 0;
      background: linear-gradient(180deg,
        rgba(18,5,8,0) 30%,
        rgba(18,5,8,0.45) 65%,
        rgba(18,5,8,0.82) 100%);
      transition: background 0.35s; }
    .lp-cat-card:hover .lp-cat-card__overlay {
      background: linear-gradient(180deg,
        rgba(243,72,109,0.08) 0%,
        rgba(18,5,8,0.50) 55%,
        rgba(18,5,8,0.88) 100%); }
    .lp-cat-card__label { position: absolute; bottom: 0; left: 0; right: 0; padding: 16px 14px 14px;
      font-family: var(--font-sans); font-size: 14px; font-weight: var(--fw-semibold);
      color: #fff; letter-spacing: 0.01em;
      transition: transform 0.35s cubic-bezier(0.22,0.61,0.36,1); }
    .lp-cat-card:hover .lp-cat-card__label { transform: translateY(-3px); }

    /* founder */
    .lp-founder { max-width: 1060px; margin: 0 auto; padding: 64px 32px;
      display:grid; grid-template-columns: 0.85fr 1.15fr; gap: 48px; align-items: center; }
    .lp-founder__portrait { border-radius: var(--radius-lg); overflow:hidden; box-shadow: var(--shadow-md);
      aspect-ratio: 4 / 5; }
    .lp-founder__portrait img { width:100%; height:100%; object-fit: cover; object-position: center 28%; display:block; }
    .lp-founder__hand { font-family: 'EB Garamond', ui-serif, Georgia, "Times New Roman", serif; font-size: 18px; line-height: 1.5;
      color: var(--text-body); margin: 18px 0 0; }
    .lp-founder__sign { font-family: 'Gloria Hallelujah', cursive; font-size: 17px; color: var(--njs-rose-deep);
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

    /* modal */
    .lp-modal-overlay { position: fixed; inset: 0; z-index: 200;
      background: rgba(0,0,0,0.62); backdrop-filter: blur(5px);
      display: flex; align-items: center; justify-content: center; padding: 20px;
      animation: lp-modal-bg 0.22s ease both; }
    @keyframes lp-modal-bg { from { opacity:0; } to { opacity:1; } }
    .lp-modal-box { position: relative; width: 100%; max-width: 1060px;
      border-radius: var(--radius-lg); overflow: hidden;
      background: var(--surface-page); box-shadow: 0 32px 80px rgba(0,0,0,0.38);
      animation: lp-modal-up 0.28s cubic-bezier(0.22,0.61,0.36,1) both; }
    @keyframes lp-modal-up { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:none; } }
    .lp-modal-close { position: absolute; top: 14px; right: 14px; z-index: 10;
      width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--border-subtle);
      background: rgba(255,255,255,0.92); color: var(--text-body); cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      box-shadow: var(--shadow-sm); transition: transform 0.2s ease, background 0.2s ease; }
    .lp-modal-close:hover { background: #fff; transform: scale(1.1); }
    .lp-modal-box .pr-band { border: none; }
    .lp-modal-box .pr-head { display: none; }
    .lp-modal-box .pr-inner { padding: 28px 28px 28px; }
    .lp-modal-box .pr-story { min-height: 0; height: 100%; }
    .lp-modal-box .pr-card { margin: 0; }

    /* responsive */
    @media (max-width: 960px){
      .lp-cats__grid { grid-template-columns: repeat(4, 1fr); }
      .lp-hero__cards { grid-template-columns: 1fr 1fr; gap: 18px; }
      .lp-hc:nth-child(even) { margin-top: 0; }
      .lp-hc:nth-child(2), .lp-hc:nth-child(4) { margin-top: 48px; }
      .lp-founder { grid-template-columns: 1fr; gap: 32px; }
      .lp-founder__portrait { max-width: 360px; }
      .lp-fa__row1 { grid-template-columns: 1fr 1fr; }
      .lp-fa__mini-box { grid-column: span 2; }
      .lp-fa__row2 { grid-template-columns: 1fr 1fr; }
      .lp-about__stats { grid-template-columns: 1fr 1fr; gap: 20px; }
      .lp-about__desc { grid-template-columns: 1fr; gap: 16px; }
    }
    @media (max-width: 700px){
      .lp-nav { padding: 14px 20px; }
      .lp-nav__links a:not(.lp-nav__cta) { display:none; }
    }
    @media (max-width: 600px){
      .lp-hero { padding: 100px 20px 56px; }
      .lp-hero__title { font-size: 38px; }
      .lp-h2 { font-size: 34px; }
      .lp-fa, .lp-cats, .lp-founder { padding-left: 20px; padding-right: 20px; }
      .lp-fa__row1, .lp-fa__row2 { grid-template-columns: 1fr; }
      .lp-about { padding: 56px 20px 52px; }
      .lp-about__deco { width: 100px; height: 130px; }
      .lp-about__stats { grid-template-columns: 1fr 1fr; }
      .lp-fa__mini-box { grid-column: span 1; }
      .lp-hero__cards { display: flex; flex-direction: row; overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; gap: 14px; padding-bottom: 12px; scrollbar-width: none; }
      .lp-hero__cards::-webkit-scrollbar { display: none; }
      .lp-hc { flex: 0 0 80vw; max-width: 320px; min-height: 380px; scroll-snap-align: start; }
      .lp-hc:nth-child(2), .lp-hc:nth-child(4) { margin-top: 0; }
      .lp-hero__email-wrap { flex-direction: column; align-items: stretch; }
      .lp-hero__email-input { width: 100%; text-align: center; }
      .lp-hero__email-wrap .anim-cta { justify-content: center; }
      .lp-cats__grid { grid-template-columns: repeat(3, 1fr); gap: 8px; }
      .lp-cats__title { padding: 0 20px; }
      .lp-cat-card__label { font-size: 12px; padding: 12px 10px 10px; }
      .lp-foot { padding: 40px 20px; }
    }
    @media (max-width: 380px){
      .lp-cats__grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
    }
  `}</style>;
}

export default LandingPage;
