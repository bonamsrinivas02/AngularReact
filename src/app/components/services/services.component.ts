import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ServicesComponent {
  services = [
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

  handleServiceClick(serviceId: number) {
    const service = this.services.find(s => s.id === serviceId);
    if (service) {
      alert(`${service.title}\n\nFeatures: ${service.features.join(', ')}`);
    }
  }
}
