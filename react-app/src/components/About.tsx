import React from 'react';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { label: 'Years in Business', value: '10+' },
    { label: 'Happy Customers', value: '5000+' },
    { label: 'Team Members', value: '150+' },
    { label: 'Projects Completed', value: '2000+' }
  ];

  return (
    <section className="about" id="about">
      <h2>About Us</h2>
      <p>We are a leading technology company dedicated to providing innovative solutions that empower businesses worldwide. Our team of experts brings over 10 years of experience in cloud infrastructure, security, and digital transformation. We believe in delivering excellence through cutting-edge technology and exceptional customer service.</p>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat" key={index}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
