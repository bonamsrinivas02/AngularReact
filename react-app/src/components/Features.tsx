import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with our optimized infrastructure and cloud-based solutions.',
      icon: '\u26A1'
    },
    {
      id: 2,
      title: 'Secure & Reliable',
      description: 'Bank-level encryption and 99.9% uptime guarantee ensure your data is always protected.',
      icon: '\uD83D\uDD12'
    },
    {
      id: 3,
      title: '24/7 Support',
      description: 'Our dedicated support team is always available to assist you with any questions or issues.',
      icon: '\uD83D\uDCAC'
    }
  ];

  const handleFeatureClick = (featureId: number) => {
    alert(`Feature ${featureId}: Learn more coming soon!`);
  };

  return (
    <section className="features" id="features">
      {features.map((feature) => (
        <div className="feature-card" key={feature.id} onClick={() => handleFeatureClick(feature.id)}>
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
