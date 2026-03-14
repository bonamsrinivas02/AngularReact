import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: 'TechHub has completely transformed our business operations. The reliability and performance are unmatched in the industry.',
      author: 'Sarah Johnson',
      title: 'CEO at InnovateTech',
      rating: 5
    },
    {
      id: 2,
      quote: 'The support team is exceptional! They responded to our needs within minutes and provided comprehensive solutions.',
      author: 'Michael Chen',
      title: 'CTO at DataVision',
      rating: 5
    },
    {
      id: 3,
      quote: 'We saved 40% on infrastructure costs while improving performance. Highly recommended for any enterprise.',
      author: 'Emily Rodriguez',
      title: 'Operations Manager at GlobalSoft',
      rating: 5
    },
    {
      id: 4,
      quote: "The most secure and scalable solution we've ever used. Peace of mind is priceless.",
      author: 'David Thompson',
      title: 'Security Lead at SecureFirst',
      rating: 5
    }
  ];

  const getStarRating = (rating: number): string[] => {
    return Array(5).fill('\u2B50').slice(0, rating);
  };

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Clients Say</h2>
      {testimonials.map((testimonial) => (
        <div className="testimonial" key={testimonial.id}>
          <div className="rating">
            {getStarRating(testimonial.rating).map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          </div>
          <p>"{testimonial.quote}"</p>
          <span className="author">- {testimonial.author}</span>
          <span className="title">{testimonial.title}</span>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
