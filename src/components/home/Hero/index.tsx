import React from 'react';
import Container from '../../common/Container';
import HeroContent from './HeroContent';
import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden w-full">
      <Container className="py-20 md:py-28">
        <HeroContent />
        <HeroBackground />
      </Container>
    </section>
  );
}