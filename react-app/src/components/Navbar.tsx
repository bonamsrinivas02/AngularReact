import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with id '${sectionId}' not found`);
      }
    }, 0);
  };

  const handleLogin = () => {
    alert('Login functionality coming soon!');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>TechHub</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
      </ul>
      <div className="navbar-login">
        <button onClick={handleLogin}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
