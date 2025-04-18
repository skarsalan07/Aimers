import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // or './app' if you're using lowercase
import './assets/css/animate.css'; // Your global CSS file import
import './assets/css/bootstrap.min.css'; // Your global CSS file import
import './assets/css/flex-slider.css'; // Your global CSS file import
import './assets/css/fontawesome.css'; // Your global CSS file import
import './assets/css/owl.css'; // Your global CSS file import
import './assets/css/templatemo-villa-agency.css'; // Your global CSS file import
import * as Images from './assets/images'; // Adjust path if not directly from src

// Example usage
console.log(Images.banner01);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
