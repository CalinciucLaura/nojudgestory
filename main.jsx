import React from 'react';
import ReactDOM from 'react-dom/client';

// The design system bundle components reference React as a global (window.React).
// We expose it here before the first render so those components can find it.
window.React = React;

import './_ds/no-judge-story-design-system-5c76f5e6-6340-4ad4-981e-46e764f17b9b/styles.css';
import './index.css';
import LandingPage from './Landing';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
