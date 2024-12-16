import React from 'react';
import Container from '../../common/Container';
import Logo from './Logo';
import NavLinks from './NavLinks';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <Container>
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <NavLinks />
        </div>
      </Container>
    </nav>
  );
}