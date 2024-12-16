import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

export default function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href} className="text-gray-600 hover:text-black">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}