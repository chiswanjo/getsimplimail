import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function useAuthNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const navigateToSearch = () => {
    if (user) {
      navigate('/dashboard/search');
    } else {
      navigate('/auth/register', { state: { from: location } });
    }
  };

  return { navigateToSearch };
}