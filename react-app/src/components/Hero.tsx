import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const handleGetStarted = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Welcome to TechHub</h1>
        <p>Transform your business with cutting-edge solutions and innovative technology.</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
