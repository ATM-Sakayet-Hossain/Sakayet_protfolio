import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar ng">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
         <img className="w-[110px]" src="images/logo.png" alt="logo" />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div
          className={`navbar-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={toggleMobileMenu}>
            About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Resume" className="navbar-link" onClick={toggleMobileMenu}>            
              Resume
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/portfolio" className="navbar-link" onClick={toggleMobileMenu}>            
              Portfolio
            </Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={toggleMobileMenu}>
              Blog
            </Link>
          </li> */}
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;