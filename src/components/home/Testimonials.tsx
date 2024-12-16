import React from 'react';
import { Star } from 'lucide-react';
import Container from '../common/Container';

const testimonials = [
  {
    quote: "SimpliMail has transformed how we connect with creators. The response rates are incredible!",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "StyleBox",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    quote: "The verified contacts save us countless hours of research. It's a game-changer for our influencer campaigns.",
    author: "Michael Rodriguez",
    role: "Brand Manager",
    company: "TechStart",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    quote: "Best investment we've made for our creator outreach program. The quality of contacts is unmatched.",
    author: "Emily Watson",
    role: "CEO",
    company: "Bloom Beauty",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See why companies choose SimpliMail for their creator outreach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, author, role, company, avatar }) => (
            <div key={author} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">"{quote}"</blockquote>
              <div className="flex items-center">
                <img
                  src={avatar}
                  alt={author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{author}</p>
                  <p className="text-sm text-gray-600">{role}, {company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}