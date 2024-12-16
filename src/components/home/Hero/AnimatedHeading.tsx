import React from 'react';

const words = ['Growth', 'Success', 'Results', 'Impact'];

export default function AnimatedHeading() {
  const [currentWord, setCurrentWord] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
      Find your next TikTok Influencers,
      <br className="hidden md:inline" />
      for Maximum{' '}
      <span className="relative inline-block">
        <span className="absolute transition-opacity duration-300 ease-in-out">
          {words.map((word, index) => (
            <span
              key={word}
              className={`absolute inset-0 transition-opacity duration-300 ${
                index === currentWord ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                background: 'linear-gradient(to right, #4F46E5, #9333EA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {word}
            </span>
          ))}
        </span>
        <span className="invisible">{words[0]}</span>
      </span>
    </h1>
  );
}