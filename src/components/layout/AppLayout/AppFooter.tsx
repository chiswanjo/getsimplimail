import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin } from 'lucide-react';
import Container from '../../common/Container';

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blog' }
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

export default function AppFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center">
              <Mail className="h-8 w-8 text-black" />
              <span className="ml-2 text-xl font-bold">SimpliMail</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-sm">
              Connect with TikTok creators efficiently and affordably.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([key, section]) => (
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
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} SimpliMail. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}