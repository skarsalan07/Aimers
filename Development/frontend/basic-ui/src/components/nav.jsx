import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/css/ThemeToggle.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/nav.css';

function Nav_1() {
  const [activeLink, setActiveLink] = useState('Home');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    window.location.reload();
  };

  const handleSelect = (selectedKey) => {
    setActiveLink(selectedKey);
  };

  return (
    <header className="header">
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#" className="logo">Aimers</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" className="nav-toggle">
            <span className="hamburger"><span></span><span></span><span></span></span>
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
            <Form className="d-flex ms-lg-4">
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

            {/* User image + Logout button responsive */}
            <div className="d-flex align-items-center ms-3 flex-wrap">
              {username ? (
                <>
                  <div
                    className="user-icon rounded-circle"
                    style={{
                      width: '45px',
                      height: '45px',
                      backgroundColor: '#ffffff22',
                      border: '2px solid #ffffff88',
                      boxShadow: '0 0 5px #ffffff33',
                      overflow: 'hidden',
                      cursor: 'default',
                      flexShrink: 0,
                    }}
                    title={username}
                  >
                    <img
                      src="https://randomuser.me/api/portraits/lego/1.jpg"
                      alt="User"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                    />
                  </div>
                  
                </>
              ) : (
                <Button variant="outline-light" className="login-btn" href="/login">
                  Login
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Nav_1;
