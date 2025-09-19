import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">Nithin Thota</a>
      
      {/* Hamburger menu icon, only visible on mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {/* These spans will turn into the 'X' icon when the menu is open */}
        <span className={menuOpen ? 'bar bar1 open' : 'bar bar1'}></span>
        <span className={menuOpen ? 'bar bar2 open' : 'bar bar2'}></span>
        <span className={menuOpen ? 'bar bar3 open' : 'bar bar3'}></span>
      </div>

      {/* Navigation links. The 'active' class is added on mobile when menuOpen is true */}
      <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
        {/* When a link is clicked, close the menu */}
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;