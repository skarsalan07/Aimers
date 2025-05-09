import React, { useEffect } from 'react';

import Nav from '../components/nav'; // Import Nav component from the correct path
import Curosoul from '../components/main'; // Import Nav component from the correct path
import WhyChooseUs from '../components/why_choose_us'; // Import Nav component from the correct path
import Recommendation from '../components/recommendation'; // Import Nav component from the correct path
import Roadmap from '../components/roadmap'; // Import Nav component from the correct path
import Rating from '../components/ratings'; // Import Nav component from the correct path
import Footer from '../components/footer'; // Import Nav component from the correct path



const Header = () => {
  useEffect(() => {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
      });
    }

    // Optional cleanup if needed
    return () => {
      if (toggle && menu) {
        toggle.removeEventListener('click', () => {
          menu.classList.toggle('active');
        });
      }
    };
  }, []);

  return (
    <header>
      <Nav /> {/* Use the Nav component here */}
      <Curosoul />
      <Recommendation />
      <WhyChooseUs />
      <Roadmap />
      <Rating />
      <Footer />
    
    </header>
  );
};

export default Header;
