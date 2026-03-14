import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (link: string) => {
    alert(`${link} page coming soon!`);
  };

  return (
    <footer className="footer">
      <p>&copy; {currentYear} TechHub. All rights reserved.</p>
      <ul>
        <li><a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('Privacy Policy'); }}>Privacy Policy</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('Terms of Service'); }}>Terms of Service</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
