import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer opacity-0 transform translate-y-4"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(1rem)',
        transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}s`
      }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 group-hover:bg-black transition-colors duration-300 mb-4">
        <Icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-black transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}