import React from 'react';
import { CreditCard, Check } from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';

const plan = {
  name: 'Standard Plan',
  credits: 100,
  price: 14.99,
  features: [
    'Access to verified creator contacts',
    'Advanced search filters',
    'Priority email support',
    'Credits valid for 30 days',
    'Bulk export options',
    'Analytics dashboard',
    'Team collaboration tools'
  ]
};

export default function PricingPage() {
  return (
    <>
      <SEO
        title="Pricing - SimpliMail"
        description="Simple and affordable pricing for your creator outreach needs"
        keywords={['pricing', 'plan', 'credits']}
      />
      <Container className="py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">One plan, everything you need</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-black p-8">
            <div className="flex items-center justify-center mb-4">
              <CreditCard className="w-8 h-8 text-gray-600" />
            </div>
            
            <h3 className="text-xl font-bold text-center mb-2">{plan.name}</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-600">/month</span>
              <p className="text-gray-600 mt-2">{plan.credits} credits included</p>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full">
              Get Started
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>Need more credits? Contact us for custom enterprise solutions.</p>
        </div>
      </Container>
    </>
  );
}