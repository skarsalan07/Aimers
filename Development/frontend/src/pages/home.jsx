import React, { useEffect } from 'react';
import Nav from '../components/nav';
import Curosoul from '../components/main';
import WhyChooseUs from '../components/why_choose_us';
import Recommendation from '../components/recommendation';
import Roadmap from '../components/roadmap';
import Footer from '../components/footer';

const Header = () => {
  useEffect(() => {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
      });
    }

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
      <Nav />
      <Curosoul />
      <Recommendation />
      <WhyChooseUs />
      <Roadmap />
      <Footer />
    </header>
  );
};

export default Header;
