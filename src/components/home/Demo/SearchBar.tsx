import React from 'react';
import Button from '../../common/Button';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <input
        type="text"
        placeholder="Search creators..."
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="flex space-x-4">
        <Button variant="outline">Filters</Button>
        <Button variant="outline">Sort</Button>
      </div>
    </div>
  );
}