import React from 'react';
import Container from '../../components/common/Container';
import SEO from '../../components/common/SEO';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service - SimpliMail"
        description="SimpliMail's terms of service and usage conditions"
        keywords={['terms', 'conditions', 'service']}
      />
      <Container className="py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-4">Last updated: March 19, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using SimpliMail's services, you agree to be bound by
                these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Use the services in compliance with all applicable laws</li>
                <li>Not misuse or abuse the platform or creator information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Credits and Payments</h2>
              <p>
                Credits are non-refundable and valid for the specified period.
                Payment terms and conditions:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>All payments are processed securely</li>
                <li>Credits expire according to plan terms</li>
                <li>Unused credits are not refundable</li>
                <li>Pricing may be subject to change</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Creator Data Usage</h2>
              <p>
                When accessing creator information through our platform, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use information only for legitimate business purposes</li>
                <li>Not share or resell creator information</li>
                <li>Respect creator privacy and communication preferences</li>
                <li>Comply with all applicable data protection laws</li>
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}