import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import clothes from './assets/images/clothes.png';

const handleIcon = (function () {
  const link =
    document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/png';
  link.rel = 'shortcut icon';
  link.href = clothes;
  document.getElementsByTagName('head')[0].appendChild(link);
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
