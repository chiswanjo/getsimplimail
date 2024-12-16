import React from 'react';
import Container from '../../common/Container';
import StatItem from './StatItem';

const stats = [
  { value: '100K+', label: 'Active Creators' },
  { value: '5M+', label: 'Successful Matches' },
  { value: '97%', label: 'Response Rate' },
  { value: '12h', label: 'Average Response Time' }
];

export default function Stats() {
  return (
    <section className="bg-black text-white py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}