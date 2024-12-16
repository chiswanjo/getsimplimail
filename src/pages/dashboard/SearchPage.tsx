import React from 'react';
import Container from '../../components/common/Container';
import SEO from '../../components/common/SEO';
import SearchFilters from '../../components/search/SearchFilters';
import SearchResults from '../../components/search/SearchResults';
import { useCreators } from '../../lib/supabase/hooks/useCreators';
import { SearchFilters as SearchFiltersType } from '../../types';

export default function SearchPage() {
  const { searchCreators, loading, error } = useCreators();
  const [filters, setFilters] = React.useState<SearchFiltersType>({
    query: '',
    category: '',
    minFollowers: undefined,
    maxFollowers: undefined,
    minEngagement: undefined,
    maxEngagement: undefined,
    isVerified: undefined
  });

  const handleSearch = React.useCallback(async (newFilters: SearchFiltersType) => {
    setFilters(newFilters);
    await searchCreators(newFilters);
  }, [searchCreators]);

  return (
    <>
      <SEO
        title="Search Creators - SimpliMail"
        description="Search and connect with TikTok creators"
        keywords={['search', 'creators', 'tiktok', 'influencers']}
      />
      <Container className="py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Search Creators</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <SearchFilters filters={filters} onSearch={handleSearch} />
          <div className="lg:col-span-3">
            <SearchResults loading={loading} error={error} />
          </div>
        </div>
      </Container>
    </>
  );
}