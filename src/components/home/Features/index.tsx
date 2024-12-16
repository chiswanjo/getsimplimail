import React from 'react';
import { Search, Lock, DollarSign, Target, Users, TrendingUp } from 'lucide-react';
import Container from '../../common/Container';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Find the perfect creators with our advanced filtering system'
  },
  {
    icon: Target,
    title: 'Precise Targeting',
    description: 'Connect with creators who match your brand perfectly'
  },
  {
    icon: Users,
    title: 'Verified Contacts',
    description: 'Access real, verified email addresses of TikTok creators'
  },
  {
    icon: Lock,
    title: 'Secure Platform',
    description: 'Your data and transactions are always protected'
  },
  {
    icon: DollarSign,
    title: 'Pay Per Contact',
    description: 'Only pay for the contacts you want to reach'
  },
  {
    icon: TrendingUp,
    title: 'Growth Analytics',
    description: 'Track your outreach success and optimize campaigns'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything You Need for Successful Creator Outreach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}