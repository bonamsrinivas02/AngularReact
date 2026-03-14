import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent {
  stats = [
    { label: 'Years in Business', value: '10+' },
    { label: 'Happy Customers', value: '5000+' },
    { label: 'Team Members', value: '150+' },
    { label: 'Projects Completed', value: '2000+' }
  ];
}
