import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function Step({ icon: Icon, title, description, isLast }: StepProps) {
  return (
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        {!isLast && (
          <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gray-200" />
        )}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}