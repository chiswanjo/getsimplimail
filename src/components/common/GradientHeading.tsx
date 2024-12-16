import React from 'react';

interface GradientHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

const gradientClasses = {
  1: 'bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600',
  2: 'bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500',
  3: 'bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500'
};

export default function GradientHeading({ 
  children, 
  level = 1,
  className = ''
}: GradientHeadingProps) {
  const baseClasses = 'bg-clip-text text-transparent font-bold';
  const gradientClass = gradientClasses[level];
  const combinedClasses = `${baseClasses} ${gradientClass} ${className}`;

  switch (level) {
    case 1:
      return <h1 className={`text-4xl md:text-5xl ${combinedClasses}`}>{children}</h1>;
    case 2:
      return <h2 className={`text-3xl md:text-4xl ${combinedClasses}`}>{children}</h2>;
    case 3:
      return <h3 className={`text-2xl md:text-3xl ${combinedClasses}`}>{children}</h3>;
    default:
      return <h1 className={`text-4xl md:text-5xl ${combinedClasses}`}>{children}</h1>;
  }
}