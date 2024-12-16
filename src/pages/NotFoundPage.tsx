import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { useAuth } from '../contexts/AuthContext';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleRedirect = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <Container className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <Button onClick={handleRedirect} className="inline-flex items-center">
          <Home className="w-4 h-4 mr-2" />
          {user ? 'Back to Dashboard' : 'Back to Home'}
        </Button>
      </div>
    </Container>
  );
}