import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/home'; // Make sure your pages are in src/pages

function App() {
  return (
    <>
      <Header />
      <Home /> {/* Displays Home page */}
      <Footer />
    </>
  );
}

export default App;
