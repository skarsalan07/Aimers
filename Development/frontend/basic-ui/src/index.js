import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Your App component
import '../src/assets/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
