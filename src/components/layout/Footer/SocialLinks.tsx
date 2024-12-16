import React from 'react';
import { X } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="mt-6 flex space-x-4">
      <a
        href="https://x.com/simplimail"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-500 transition-colors"
        aria-label="Follow us on X"
      >
        <X className="h-6 w-6" />
      </a>
    </div>
  );
}