import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ activePage }) => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <h1>Aimers</h1>
              </Link>
              <ul className="nav">
                <li><Link to="/" className={activePage === 'home' ? 'active' : ''}>Home</Link></li>
                <li><Link to="/properties" className={activePage === 'properties' ? 'active' : ''}>Properties</Link></li>
                <li><Link to="/property-details" className={activePage === 'property-details' ? 'active' : ''}>Property Details</Link></li>
                <li><Link to="/contact" className={activePage === 'contact' ? 'active' : ''}>Contact Us</Link></li>
                <li><a href="#"><i className="fa fa-calendar"></i> Schedule a visit</a></li>
              </ul>
              <a className='menu-trigger'>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;