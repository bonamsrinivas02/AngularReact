import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class FeaturesComponent {
  features = [
    {
      id: 1,
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with our optimized infrastructure and cloud-based solutions.',
      icon: '⚡'
    },
    {
      id: 2,
      title: 'Secure & Reliable',
      description: 'Bank-level encryption and 99.9% uptime guarantee ensure your data is always protected.',
      icon: '🔒'
    },
    {
      id: 3,
      title: '24/7 Support',
      description: 'Our dedicated support team is always available to assist you with any questions or issues.',
      icon: '💬'
    }
  ];

  handleFeatureClick(featureId: number) {
    alert(`Feature ${featureId}: Learn more coming soon!`);
  }
}
