import React from 'react';
import { Search, Key, Mail } from 'lucide-react';
import Container from '../common/Container';

const steps = [
  {
    icon: Search,
    title: 'Search Creators',
    description: 'Find the perfect TikTok creators using our advanced filters'
  },
  {
    icon: Key,
    title: 'Unlock Contact',
    description: 'Use your credits to access verified contact information'
  },
  {
    icon: Mail,
    title: 'Connect',
    description: 'Reach out directly and start building partnerships'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How SimpliMail Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gray-200" />
                )}
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}