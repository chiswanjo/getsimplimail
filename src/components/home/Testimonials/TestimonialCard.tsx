import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isFeature?: boolean;
}

export default function TestimonialCard({ testimonial, isFeature }: TestimonialCardProps) {
  const { quote, author, role, company, avatar } = testimonial;

  return (
    <div className={`
      relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden
      ${isFeature ? 'md:col-span-2 md:row-span-2' : ''}
    `}>
      <div className="absolute top-4 right-4 text-gray-100">
        <Quote className="w-8 h-8" />
      </div>
      
      <div className="p-8">
        <blockquote className={`
          text-gray-700 mb-8 relative z-10
          ${isFeature ? 'text-xl' : 'text-base'}
        `}>
          "{quote}"
        </blockquote>
        
        <div className="flex items-center">
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-600">{role}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}