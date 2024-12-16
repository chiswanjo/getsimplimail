import { useCallback, useState } from 'react';
import { supabase } from '../client';

export function useUnlockContact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const unlockContact = useCallback(async ({
    userId,
    creatorId,
    transactionId
  }: {
    userId: string;
    creatorId: string;
    transactionId: string;
  }) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: unlockError } = await supabase
        .from('unlocked_contacts')
        .insert({
          user_id: userId,
          creator_id: creatorId,
          transaction_id: transactionId
        })
        .select('*, creators(email)')
        .single();

      if (unlockError) throw unlockError;
      return data;
    } catch (err) {
      const error = err as Error;
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    unlockContact,
    loading,
    error
  };
}