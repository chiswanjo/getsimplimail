import React from 'react';
import { useCreators } from '../../../lib/supabase/hooks/useCreators';
import { useUnlockContact } from '../../../lib/supabase/hooks/useUnlockContact';
import CreatorCard from './CreatorCard';
import LoadingSpinner from '../../common/LoadingSpinner';

interface SearchResultsProps {
  loading: boolean;
  error: Error | null;
}

export default function SearchResults({ loading, error }: SearchResultsProps) {
  const { creators } = useCreators();
  const { unlockContact } = useUnlockContact();

  const handleUnlock = async (creatorId: string) => {
    // Implementation will be added later
    console.log('Unlocking creator:', creatorId);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-md">
        {error.message}
      </div>
    );
  }

  if (!creators?.length) {
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
        <p className="text-gray-600">No creators found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {creators.map((creator) => (
        <CreatorCard
          key={creator.id}
          creator={creator}
          onUnlock={handleUnlock}
        />
      ))}
    </div>
  );
}