import React, { useEffect } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Curosoul from '../components/mock-interview-curosl';

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
      <Footer />
    </header>
  );
};

export default Header;
