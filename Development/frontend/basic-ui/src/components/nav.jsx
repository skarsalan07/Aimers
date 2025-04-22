import React, { useState } from 'react';
import '../assets/css/nav.css';

const Nav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // for dark mode toggle

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode); // Toggle dark mode class on body
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <a href="#" className="logo">LOGO</a>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`nav-menu ${isMenuActive ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link active">Home</a>
            </li>
            <li className="nav-item has-dropdown">
              <a href="#" className="nav-link">
                Products
                <svg className="icon chevron-icon" viewBox="0 0 24 24" width="14" height="14">
                  <path d="M7 10l5 5 5-5z" fill="currentColor" />
                </svg>
              </a>
              <ul className="dropdown">
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Featured</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Seasonal</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>

          <div className="nav-actions">
            <div className="search-container">
              <input type="text" className="search-input" placeholder="Search..." />
              <button className="search-btn">
                <svg className="icon search-icon" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor" />
                </svg>
              </button>
            </div>

            <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
              <svg className={`icon moon-icon ${isDarkMode ? 'hidden' : ''}`} viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" fill="currentColor" />
              </svg>

              <svg className={`icon sun-icon ${isDarkMode ? '' : 'hidden'}`} viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45 1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
