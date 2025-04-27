import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/css/ThemeToggle.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/nav.css';

function Nav_1() {
  // useEffect(() => {
  //   const themeToggle = document.querySelector('.theme-toggle');
  //   const moonIcon = document.querySelector('.moon-icon');
  //   const sunIcon = document.querySelector('.sun-icon');

  //   const toggleTheme = () => {
  //     const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
  //     document.documentElement.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');

  //     if (isDark) {
  //       moonIcon.classList.remove('hidden');
  //       sunIcon.classList.add('hidden');
  //     } else {
  //       moonIcon.classList.add('hidden');
  //       sunIcon.classList.remove('hidden');
  //     }
  //   };

  //   themeToggle.addEventListener('click', toggleTheme);

  //   return () => {
  //     themeToggle.removeEventListener('click', toggleTheme);
  //   };
  // }, []);

  return (
    <>
      <header className="header">
        <Navbar expand="lg" className="navbar">
          <Container>
            <Navbar.Brand href="#" className="logo">Aimers</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-nav" className="nav-toggle">
              <span className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </Navbar.Toggle>

            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Item>
                  <Nav.Link href="#" className="nav-link active">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="nav-link">Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="nav-link">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="nav-link">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="nav-link">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="nav-link">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>

            <div className="nav-actions">
              <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..." />
                <button className="search-btn">
                  <svg className="icon search-icon" viewBox="0 0 24 24" width="18" height="18">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"></path>
                  </svg>
                </button>
              </div>
                <div className="login_signup">
                  <button className="login_button log">Login</button>
                  <button className="register_button reg">Sign up</button>

              </div>
              {/* New section for Login and Sign up buttons */}
              {/* <button className="theme-toggle" aria-label="Toggle theme">
                <svg className="icon moon-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" fill="currentColor"></path>
                </svg>
                <svg className="icon sun-icon hidden" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06z" fill="currentColor"></path>
                </svg>
              </button> */}
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Nav_1;
