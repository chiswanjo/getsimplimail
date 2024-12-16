import React from 'react';
import Container from '../common/Container';

const stats = [
  { value: '50K+', label: 'Verified Creators' },
  { value: '2M+', label: 'Successful Connections' },
  { value: '95%', label: 'Response Rate' },
  { value: '24h', label: 'Average Response Time' }
];

export default function Stats() {
  return (
    <section className="bg-black text-white py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-bold mb-2">{value}</p>
              <p className="text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}