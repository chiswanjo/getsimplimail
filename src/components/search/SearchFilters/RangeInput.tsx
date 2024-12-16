import React from 'react';

interface RangeInputProps {
  label: string;
  min: number | undefined;
  max: number | undefined;
  onMinChange: (value: number | undefined) => void;
  onMaxChange: (value: number | undefined) => void;
  step?: number;
  minPlaceholder?: string;
  maxPlaceholder?: string;
}

export default function RangeInput({
  label,
  min,
  max,
  onMinChange,
  onMaxChange,
  step = 1,
  minPlaceholder = 'Min',
  maxPlaceholder = 'Max'
}: RangeInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex space-x-2">
        <input
          type="number"
          value={min ?? ''}
          onChange={(e) => onMinChange(e.target.value ? Number(e.target.value) : undefined)}
          placeholder={minPlaceholder}
          step={step}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
        <input
          type="number"
          value={max ?? ''}
          onChange={(e) => onMaxChange(e.target.value ? Number(e.target.value) : undefined)}
          placeholder={maxPlaceholder}
          step={step}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
}