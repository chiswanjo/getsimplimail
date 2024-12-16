import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { useAuthNavigation } from '../../hooks/useAuthNavigation';

export default function Hero() {
  const { navigateToSearch } = useAuthNavigation();

  return (
    <section className="relative bg-white overflow-hidden">
      <Container className="py-20 md:py-28">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Connect with TikTok Influencers,<br className="hidden md:inline" />
            Pay Only for What You Need
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Access verified contact information for TikTok creators. No subscriptions, just pay per contact.
          </p>
          <Button
            size="lg"
            onClick={navigateToSearch}
            className="inline-flex items-center text-lg px-8"
          >
            Start Searching Creators <ArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100 to-green-100 rounded-full opacity-20 blur-3xl" />
        </div>
      </Container>
    </section>
  );
}