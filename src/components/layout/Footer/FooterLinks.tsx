import React from 'react';
import { Link } from 'react-router-dom';

interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

interface FooterLinksProps {
  sections: Record<string, FooterSection>;
}

const sections = {
  product: {
    title: 'Product',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blog' }
    ]
  },
  tools: {
    title: 'Free Tools',
    links: [
      { label: 'Hashtag Generator', href: '/tools/hashtag-generator' },
      { label: 'Engagement Calculator', href: '/tools/engagement-calculator' }
    ]
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' }
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' }
    ]
  }
};

export default function FooterLinks() {
  return (
    <>
      {Object.entries(sections).map(([key, section]) => (
        <div key={key}>
          <h3 className="font-semibold mb-4">{section.title}</h3>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}