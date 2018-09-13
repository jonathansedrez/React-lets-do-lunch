import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './globalStyles'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log(`Service Worker registered! Scope: ${registration.scope}`);
      })
      .catch(err => {
        console.log(`Service Worker registration failed: ${err}`);
      });
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
