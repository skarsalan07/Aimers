import React, { useEffect } from 'react';


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
