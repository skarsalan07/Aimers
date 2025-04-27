import React, { useEffect } from 'react';

import Nav from '../components/nav'; // Import Nav component from the correct path
import Main from '../components/main'; // Import Nav component from the correct path

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
      <Main />
    </header>
  );
};

export default Header;
