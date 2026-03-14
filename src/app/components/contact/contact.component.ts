import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  handleSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      alert(`Thank you ${this.formData.name}! We have received your message and will get back to you shortly at ${this.formData.email}`);
      this.formData = { name: '', email: '', message: '' };
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    } else {
      alert('Please fill in all fields.');
    }
  }
}
