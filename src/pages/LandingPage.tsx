import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import Features from '../components/home/Features';
import Demo from '../components/home/Demo';
import Testimonials from '../components/home/Testimonials';

export default function LandingPage() {
  return (
    <>
      <SEO
        title="SimpliMail - TikTok Creator Outreach Made Simple"
        description="Connect with TikTok creators efficiently. Access verified contact information and grow your brand."
        keywords={[
          'tiktok creators',
          'influencer marketing',
          'creator outreach',
          'tiktok marketing',
          'influencer contacts',
          'creator database'
        ]}
        canonical="https://simplimail.xyz"
      />
      <div className="w-full">
        <Hero />
        <HowItWorks />
        <Features />
        <Demo />
        <Testimonials />
      </div>
    </>
  );
}