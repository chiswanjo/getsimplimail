import React from 'react';
import Container from '../../components/common/Container';
import SEO from '../../components/common/SEO';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy - SimpliMail"
        description="SimpliMail's privacy policy and data protection practices"
        keywords={['privacy', 'policy', 'data protection']}
      />
      <Container className="py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-4">Last updated: March 19, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                SimpliMail ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and share information
                about you when you use our website and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Account information (name, email, password)</li>
                <li>Payment information</li>
                <li>Usage data and preferences</li>
                <li>Communications with us</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve our services</li>
                <li>Process your payments</li>
                <li>Send you updates and marketing communications</li>
                <li>Respond to your requests and support needs</li>
                <li>Prevent fraud and abuse</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information
                with third parties only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With service providers who assist in our operations</li>
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}