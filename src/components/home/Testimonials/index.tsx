import React from 'react';
import Container from '../../common/Container';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './testimonials-data';

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Marketing Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of brands using SimpliMail to transform their creator outreach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature testimonial */}
          <TestimonialCard testimonial={testimonials[0]} isFeature />
          
          {/* Regular testimonials */}
          {testimonials.slice(1).map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}