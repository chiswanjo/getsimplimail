import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200/40 via-pink-200/40 to-blue-200/40 rounded-full opacity-70 blur-3xl animate-gradient" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200/40 via-indigo-200/40 to-purple-200/40 rounded-full opacity-70 blur-3xl animate-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 via-transparent to-blue-50/50 mix-blend-multiply" />
      </div>
    </div>
  );
}