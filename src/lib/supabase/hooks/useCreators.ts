import { useCallback, useState } from 'react';
import { supabase } from '../client';

interface UseCreatorsOptions {
  limit?: number;
  offset?: number;
}

export function useCreators({ limit = 10, offset = 0 }: UseCreatorsOptions = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const searchCreators = useCallback(async ({
    query,
    category,
    minFollowers,
    maxFollowers,
    minEngagement,
    maxEngagement,
    isVerified
  }: {
    query?: string;
    category?: string;
    minFollowers?: number;
    maxFollowers?: number;
    minEngagement?: number;
    maxEngagement?: number;
    isVerified?: boolean;
  } = {}) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: searchError } = await supabase.rpc('search_creators', {
        search_query: query || '',
        category_filter: category,
        min_followers: minFollowers,
        max_followers: maxFollowers,
        min_engagement: minEngagement,
        max_engagement: maxEngagement,
        is_verified: isVerified,
        result_limit: limit,
        result_offset: offset
      });

      if (searchError) throw searchError;
      return data;
    } catch (err) {
      const error = err as Error;
      setError(error);
      return [];
    } finally {
      setLoading(false);
    }
  }, [limit, offset]);

  return {
    searchCreators,
    loading,
    error
  };
}