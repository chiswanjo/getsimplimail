import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from '../../common/Container';
import Logo from '../Navbar/Logo';
import Button from '../../common/Button';
import { useAuthNavigation } from '../../../hooks/useAuthNavigation';

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navigateToSearch } = useAuthNavigation();

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                to="/pricing"
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="px-4">
                <Button
                  onClick={() => {
                    navigateToSearch();
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-center"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}