import React from 'react';
import Button from '../../common/Button';
import { Creator } from '../../../types';

interface CreatorCardProps {
  creator: Creator;
  onUnlock: (id: string) => void;
}

export default function CreatorCard({ creator, onUnlock }: CreatorCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
      <div className="flex items-center">
        <img
          src={creator.avatarUrl}
          alt={creator.fullName}
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <h4 className="font-semibold">{creator.fullName}</h4>
          <p className="text-sm text-gray-600">
            {creator.followers.toLocaleString()}+ Followers • {creator.category}
          </p>
        </div>
      </div>
      <Button onClick={() => onUnlock(creator.id)}>
        Unlock Contact
      </Button>
    </div>
  );
}