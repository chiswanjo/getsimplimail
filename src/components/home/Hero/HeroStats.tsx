import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const stats = [
  { value: 100, suffix: 'K+', label: 'Active Creators' },
  { value: 5, suffix: 'M+', label: 'Successful Matches' },
  { value: 97, suffix: '%', label: 'Response Rate' }
];

export default function HeroStats() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className="mt-12 grid grid-cols-3 gap-8 opacity-0 transform translate-y-4 transition-all duration-700 ease-out"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(1rem)' }}
    >
      {stats.map(({ value, suffix, label }) => (
        <div key={label} className="text-center">
          <div className="text-2xl font-bold mb-1">
            {inView && (
              <CountUp
                end={value}
                suffix={suffix}
                duration={2}
                separator=","
              />
            )}
          </div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      ))}
    </div>
  );
}