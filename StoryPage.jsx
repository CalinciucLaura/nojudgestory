import { useParams, useNavigate } from 'react-router-dom';
import { STORIES } from './StoriesData';

function StoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const story = STORIES.find((s) => s.id === id);

  React.useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!story) {
    return (
      <div className="sp-notfound">
        <p>Povestea nu a fost găsită.</p>
        <button onClick={() => navigate('/')}>← Înapoi</button>
      </div>
    );
  }

  const paragraphs = story.body.trim().split(/\n\n+/);

  return (
    <div className="sp-page">
      <header className="sp-nav">
        <button className="sp-back" onClick={() => navigate('/')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Înapoi
        </button>
      </header>

      <div className="sp-hero" style={{ backgroundImage: `url(/${story.img})` }}>
        <div className="sp-hero__scrim" />
        <div className="sp-hero__content">
          <span className="sp-tag">{story.cat}</span>
          <h1 className="sp-title">{story.title}</h1>
          <span className="sp-who">{story.who} · {story.read}</span>
        </div>
      </div>

      <article className="sp-body">
        {paragraphs.map((p, i) => (
          <p key={i} className="sp-p">{p}</p>
        ))}
      </article>

      <div className="sp-footer">
        <button className="sp-back-btn" onClick={() => navigate('/')}>
          ← Înapoi la povești
        </button>
      </div>

      <SpStyles />
    </div>
  );
}

function SpStyles() {
  return <style>{`
    *, *::before, *::after { box-sizing: border-box; }

    .sp-page { min-height: 100vh; background: var(--surface-page);
      font-family: var(--font-sans); }

    .sp-nav { position: sticky; top: 0; z-index: 10; padding: 16px 32px;
      background: rgba(255,255,255,0.88); backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-subtle); }

    .sp-back { display:inline-flex; align-items:center; gap:8px;
      font-family: var(--font-sans); font-size: var(--fs-sm); font-weight: var(--fw-semibold);
      color: var(--text-muted); background: none; border: none; cursor: pointer; padding: 0;
      transition: color 0.15s; }
    .sp-back:hover { color: var(--njs-rose-deep); }

    .sp-hero { position: relative; height: min(520px, 55vw); min-height: 320px;
      background-size: cover; background-position: center; }
    .sp-hero__scrim { position: absolute; inset: 0;
      background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.72) 100%); }
    .sp-hero__content { position: absolute; bottom: 0; left: 0; right: 0;
      max-width: 780px; margin: 0 auto; padding: 0 32px 48px; }

    .sp-tag { display:inline-block; font-size: var(--fs-xs); font-weight: var(--fw-bold);
      letter-spacing: var(--ls-wide); text-transform: uppercase;
      color: #fff; background: rgba(243,72,109,0.72);
      padding: 5px 14px; border-radius: var(--radius-pill); margin-bottom: 14px; }

    .sp-title { font-family: var(--font-display); font-style: italic; font-weight: var(--fw-bold);
      font-size: clamp(26px, 4vw, 44px); line-height: 1.15; color: #fff; margin: 0 0 12px; }

    .sp-who { font-size: var(--fs-sm); color: rgba(255,255,255,0.75); }

    .sp-body { max-width: 680px; margin: 0 auto; padding: 56px 32px 40px; }

    .sp-p { font-family: var(--font-sans); font-size: 18px; line-height: 1.8;
      color: var(--text-body); margin: 0 0 26px; }

    .sp-p:first-child::first-letter { font-family: var(--font-display); font-size: 62px;
      font-weight: var(--fw-bold); float: left; line-height: 0.82;
      margin: 8px 12px 0 0; color: var(--njs-rose); }

    .sp-footer { max-width: 680px; margin: 0 auto; padding: 0 32px 80px; }

    .sp-back-btn { display:inline-flex; align-items:center; gap:8px;
      font-family: var(--font-sans); font-size: var(--fs-sm); font-weight: var(--fw-semibold);
      color: var(--njs-rose-deep); background: none;
      border: 1.5px solid var(--njs-rose); border-radius: var(--radius-pill);
      padding: 12px 22px; cursor: pointer; transition: background 0.15s; }
    .sp-back-btn:hover { background: rgba(243,72,109,0.08); }

    .sp-notfound { display:grid; place-items:center; min-height:100vh;
      font-family: var(--font-sans); gap: 16px; }

    @media(max-width: 600px){
      .sp-nav { padding: 14px 20px; }
      .sp-hero__content { padding: 0 20px 36px; }
      .sp-body, .sp-footer { padding-left: 20px; padding-right: 20px; }
      .sp-p { font-size: 16px; }
    }
  `}</style>;
}

export default StoryPage;
