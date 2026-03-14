import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed for modern businesses. Deploy, manage, and monitor your applications with ease across multiple regions and availability zones.',
      features: ['Auto-scaling', 'Load Balancing', 'CDN Integration']
    },
    {
      id: 2,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance certifications including ISO 27001, GDPR, SOC 2, and more. Protect your data with advanced encryption.',
      features: ['DDoS Protection', 'SSL/TLS', 'Backup & Recovery']
    },
    {
      id: 3,
      title: 'Analytics & Reporting',
      description: 'Real-time analytics dashboard with comprehensive reporting tools. Track performance metrics and gain actionable insights for your business.',
      features: ['Custom Dashboards', 'Real-time Reports', 'Data Visualization']
    },
    {
      id: 4,
      title: 'API Management',
      description: 'Powerful API platform with versioning, rate limiting, and developer documentation. Monetize your APIs with flexible pricing models.',
      features: ['API Gateway', 'Developer Portal', 'Rate Limiting']
    }
  ];

  const handleServiceClick = (serviceId: number) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      alert(`${service.title}\n\nFeatures: ${service.features.join(', ')}`);
    }
  };

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      {services.map((service) => (
        <div className="service-section" key={service.id} onClick={() => handleServiceClick(service.id)}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
