import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

window.React = React;

import './_ds/no-judge-story-design-system-5c76f5e6-6340-4ad4-981e-46e764f17b9b/styles.css';
import './index.css';
import LandingPage from './Landing';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
