import React from 'react';
import Container from '../../common/Container';
import FooterBranding from './FooterBranding';
import FooterLinks from './FooterLinks';
import Copyright from './Copyright';

const sections = {
  product: {
    title: 'Product',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Dashboard', href: '/dashboard' }
    ]
  },
  company: {
    title: 'Company',
    links: [
      { label: 'Blog', href: '/blog' },
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

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterBranding />
          <FooterLinks sections={sections} />
        </div>
        <Copyright />
      </Container>
    </footer>
  );
}