import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; // Import Button
import '../assets/css/ThemeToggle.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/nav.css';

function Nav_1() {
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    // Your existing logic here
  }, []);

  const handleSelect = (selectedKey) => {
    setActiveLink(selectedKey);
  };

  return (
    <>
      <header className="header">
        <Navbar expand="lg" className="navbar">
          <Container>
            <Navbar.Brand href="#" className="logo">Aimers</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" className="nav-toggle">
              <span className="hamburger">
                <span></span><span></span><span></span>
              </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto me-3" onSelect={handleSelect}>
                {['Home', 'Mock Interview', 'Roadmaps', 'Resume', 'Feedback', 'About Us'].map((name) => (
                  <Nav.Item key={name}>
                    <Nav.Link
                      eventKey={name}
                      href="#"
                      className={`nav-link ${activeLink === name ? 'active' : ''}`}
                    >
                      {name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>

              {/* Search box */}
              <Form className="d-flex ms-lg-4" style={{ backgroundColor: 'transparent' }}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  style={{ backgroundColor: 'transparent', color: 'white' }}
                />
                <button type="button" className="search-icon-btn" style={{ background: 'transparent', border: 'none' }}>
                  <i className="bi bi-search" style={{ color: 'white' }}></i>
                </button>
              </Form>

              {/* Login button */}
              <Button
                variant="outline-light"
                className="login-btn ms-3"
                href="/login"
              >
                Login
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Nav_1;
