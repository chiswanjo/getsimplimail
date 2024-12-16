import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase/client';
import { useAuth } from '../contexts/AuthContext';

interface UnlockedContact {
  id: string;
  created_at: string;
  creator: {
    id: string;
    username: string;
    full_name: string;
    email: string;
    avatar_url: string;
  };
}

export function useUnlockedContacts() {
  const [contacts, setContacts] = useState<UnlockedContact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    async function fetchContacts() {
      try {
        if (!user) return;

        const { data, error: fetchError } = await supabase
          .from('unlocked_contacts')
          .select(`
            id,
            created_at,
            creator:creators (
              id,
              username,
              full_name,
              email,
              avatar_url
            )
          `)
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (fetchError) throw fetchError;
        setContacts(data || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch contacts'));
      } finally {
        setLoading(false);
      }
    }

    fetchContacts();
  }, [user]);

  return { contacts, loading, error };
}