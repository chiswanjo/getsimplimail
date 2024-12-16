import { useCallback, useState } from 'react';
import { supabase } from '../client';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const signUp = useCallback(async ({
    email,
    password,
    fullName
  }: {
    email: string;
    password: string;
    fullName: string;
  }) => {
    try {
      setLoading(true);
      setError(null);

      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email,
        password
      });

      if (signUpError) throw signUpError;

      if (authData.user) {
        const { error: profileError } = await supabase
          .from('users')
          .insert({
            id: authData.user.id,
            email,
            full_name: fullName
          });

        if (profileError) throw profileError;
      }

      return authData;
    } catch (err) {
      const error = err as Error;
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const signIn = useCallback(async ({
    email,
    password
  }: {
    email: string;
    password: string;
  }) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) throw signInError;
      return data;
    } catch (err) {
      const error = err as Error;
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) throw signOutError;
    } catch (err) {
      const error = err as Error;
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    signUp,
    signIn,
    signOut,
    loading,
    error
  };
}