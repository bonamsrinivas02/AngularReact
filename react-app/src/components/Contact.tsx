import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert(`Thank you ${formData.name}! We have received your message and will get back to you shortly at ${formData.email}`);
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {submitted && (
        <div className="success-message">
          &#10003; Message sent successfully! We'll be in touch soon.
        </div>
      )}
    </section>
  );
};

export default Contact;
