import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div>
      <p className="text-4xl font-bold mb-2 text-white">{value}</p>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}