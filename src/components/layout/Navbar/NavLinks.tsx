import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import { useAuthNavigation } from '../../../hooks/useAuthNavigation';

export default function NavLinks() {
  const { navigateToSearch } = useAuthNavigation();

  return (
    <div className="flex items-center space-x-8">
      <Link to="/pricing" className="text-gray-700 hover:text-black">
        Pricing
      </Link>
      <Link to="/blog" className="text-gray-700 hover:text-black">
        Blog
      </Link>
      <Button onClick={navigateToSearch}>
        Get Started
      </Button>
    </div>
  );
}