import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Navbar/Logo';
import SocialLinks from './SocialLinks';

export default function FooterBranding() {
  return (
    <div className="lg:col-span-2">
      <Logo />
      <p className="mt-4 text-gray-600 max-w-sm">
        Connect with TikTok creators efficiently and affordably.
      </p>
      <SocialLinks />
    </div>
  );
}