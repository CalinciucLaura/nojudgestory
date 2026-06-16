import { STORIES } from './StoriesData';

function StoryModal({ storyId, onClose }) {
  const story = STORIES.find((s) => s.id === storyId);

  React.useEffect(() => {
    if (!storyId) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [storyId]);

  if (!story) return null;

  const paragraphs = story.body.trim().split(/\n\n+/);

  return (
    <>
      <div className="sm-overlay" onClick={onClose} aria-hidden="true" />
      <article className="sm-panel" role="dialog" aria-modal="true" aria-label={story.title}>
        <button className="sm-close" onClick={onClose} aria-label="Închide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2"
              strokeLinecap="round" />
          </svg>
        </button>

        <div className="sm-hero" style={{ backgroundImage: `url(${story.img})` }}>
          <div className="sm-hero__scrim" />
          <div className="sm-hero__meta">
            <span className="sm-tag">{story.cat}</span>
            <h1 className="sm-title">{story.title}</h1>
            <span className="sm-who">{story.who} · {story.read}</span>
          </div>
        </div>

        <div className="sm-body">
          {paragraphs.map((p, i) => (
            <p key={i} className="sm-p">{p}</p>
          ))}
        </div>
      </article>
      <SmStyles />
    </>
  );
}

function SmStyles() {
  return <style>{`
    .sm-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.55);
      backdrop-filter: blur(4px); z-index:100;
      animation: sm-fade-in 0.25s ease both; }
    @keyframes sm-fade-in { from{opacity:0} to{opacity:1} }

    .sm-panel { position:fixed; top:0; right:0; bottom:0; width:min(680px,100vw);
      background: var(--surface-page); z-index:101; overflow-y:auto;
      animation: sm-slide-in 0.35s cubic-bezier(0.22,0.61,0.36,1) both;
      display:flex; flex-direction:column; }
    @keyframes sm-slide-in { from{transform:translateX(100%)} to{transform:none} }

    .sm-close { position:sticky; top:16px; left:calc(100% - 56px);
      width:40px; height:40px; border-radius:50%; border:none; cursor:pointer;
      background:rgba(255,255,255,0.92); backdrop-filter:blur(6px);
      display:grid; place-items:center; color:var(--text-strong);
      box-shadow:0 2px 12px rgba(0,0,0,0.14); z-index:10;
      margin: 16px 16px -56px auto;
      transition: background 0.15s, transform 0.15s; }
    .sm-close:hover { background:#fff; transform:scale(1.08); }

    .sm-hero { position:relative; min-height:320px; background-size:cover;
      background-position:center; flex-shrink:0; display:flex; align-items:flex-end; }
    .sm-hero__scrim { position:absolute; inset:0;
      background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.7) 100%); }
    .sm-hero__meta { position:relative; padding:32px 40px; }
    .sm-tag { display:inline-block; font-family:var(--font-sans); font-size:var(--fs-xs);
      font-weight:var(--fw-bold); letter-spacing:var(--ls-wide); text-transform:uppercase;
      color:#fff; background:rgba(243,72,109,0.72); padding:5px 12px;
      border-radius:var(--radius-pill); margin-bottom:12px; }
    .sm-title { font-family:var(--font-display); font-style:italic; font-weight:var(--fw-bold);
      font-size:clamp(22px,3vw,32px); line-height:1.2; color:#fff; margin:0 0 10px; }
    .sm-who { font-family:var(--font-sans); font-size:var(--fs-sm);
      color:rgba(255,255,255,0.75); }

    .sm-body { padding:40px 40px 64px; flex:1; }
    .sm-p { font-family:var(--font-sans); font-size:17px; line-height:1.75;
      color:var(--text-body); margin:0 0 22px; }
    .sm-p:first-child::first-letter { font-family:var(--font-display); font-size:52px;
      font-weight:var(--fw-bold); float:left; line-height:0.85; margin:6px 10px 0 0;
      color:var(--njs-rose); }

    @media(max-width:600px){
      .sm-body { padding:28px 22px 48px; }
      .sm-hero__meta { padding:24px 22px; }
    }
  `}</style>;
}

export { StoryModal };
