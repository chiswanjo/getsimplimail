import React from 'react';
import { Search, Lock, DollarSign } from 'lucide-react';
import Container from '../common/Container';

const features = [
  {
    icon: Search,
    title: 'Verified Contacts',
    description: 'Access real, verified email addresses of TikTok creators'
  },
  {
    icon: Lock,
    title: 'Pay Per Contact',
    description: 'Only pay for the contacts you want to reach'
  },
  {
    icon: DollarSign,
    title: 'No Subscriptions',
    description: 'Zero recurring fees or hidden costs'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}