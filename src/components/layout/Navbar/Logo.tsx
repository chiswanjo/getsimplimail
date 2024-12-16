import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <Mail className="h-8 w-8 text-black" />
      <span className="ml-2 text-xl font-bold">SimpliMail</span>
    </Link>
  );
}