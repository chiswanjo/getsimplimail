import React from 'react';
import { CheckCircle, TrendingUp, Users } from 'lucide-react';
import Button from '../../common/Button';
import { Creator } from '../../../types';

interface CreatorCardProps {
  creator: Creator;
  onUnlock: (id: string) => void;
}

export default function CreatorCard({ creator, onUnlock }: CreatorCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <img
            src={creator.avatarUrl}
            alt={creator.fullName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <div className="flex items-center">
              <h3 className="font-semibold">{creator.fullName}</h3>
              {creator.isVerified && (
                <CheckCircle className="w-4 h-4 text-blue-500 ml-1" />
              )}
            </div>
            <p className="text-sm text-gray-600">@{creator.username}</p>
          </div>
        </div>
        <Button onClick={() => onUnlock(creator.id)}>
          Unlock Contact
        </Button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center text-sm text-gray-600">
          <Users className="w-4 h-4 mr-1" />
          {creator.followers.toLocaleString()} followers
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <TrendingUp className="w-4 h-4 mr-1" />
          {creator.engagement}% engagement
        </div>
      </div>

      <div className="mt-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          {creator.category}
        </span>
      </div>
    </div>
  );
}