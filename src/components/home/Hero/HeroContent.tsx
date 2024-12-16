import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../../common/Button';
import { useAuthNavigation } from '../../../hooks/useAuthNavigation';
import AnimatedHeading from './AnimatedHeading';
import HeroStats from './HeroStats';

export default function HeroContent() {
  const { navigateToSearch } = useAuthNavigation();

  return (
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <AnimatedHeading />
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Connect with verified TikTok creators who align with your brand. 
        No subscriptions, just pay for the contacts you need.
      </p>
      <Button
        size="lg"
        onClick={navigateToSearch}
        className="inline-flex items-center text-lg px-8 transform hover:scale-105 transition-transform duration-200"
      >
        Start Finding Creators <ArrowRight className="ml-2 animate-bounce-x" />
      </Button>
      <HeroStats />
    </div>
  );
}