import React, { useState } from 'react';
import Container from '../../common/Container';
import SearchBar from './SearchBar';
import CreatorCard from './CreatorCard';
import { Creator } from '../../../types';

const mockCreators: Creator[] = [
  {
    id: '1',
    username: 'sarahbeauty',
    fullName: 'Sarah Johnson',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    followers: 1000000,
    category: 'Beauty & Lifestyle',
    engagement: 4.5,
    isVerified: true
  },
  {
    id: '2',
    username: 'chefmike',
    fullName: 'Mike Chen',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    followers: 2500000,
    category: 'Food & Travel',
    engagement: 5.2,
    isVerified: true
  },
  {
    id: '3',
    username: 'emmastyle',
    fullName: 'Emma Wilson',
    avatarUrl: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?auto=format&fit=crop&w=150&h=150&q=80',
    followers: 1500000,
    category: 'Fashion',
    engagement: 4.8,
    isVerified: true
  }
];

export default function Demo() {
  const [creators] = useState<Creator[]>(mockCreators);

  const handleSearch = (query: string) => {
    console.log('Searching:', query);
  };

  const handleUnlock = (creatorId: string) => {
    console.log('Unlocking creator:', creatorId);
  };

  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          See SimpliMail in Action
        </h2>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
          <div className="p-6">
            <SearchBar onSearch={handleSearch} />
            <div className="space-y-4">
              {creators.map((creator) => (
                <CreatorCard
                  key={creator.id}
                  creator={creator}
                  onUnlock={handleUnlock}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}