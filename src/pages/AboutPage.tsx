import React from 'react';
import { Users, Shield, Target } from 'lucide-react';
import Container from '../components/common/Container';
import SEO from '../components/common/SEO';

const values = [
  {
    icon: Users,
    title: 'Creator-First Approach',
    description: 'We prioritize creating value for both brands and creators, ensuring meaningful connections.'
  },
  {
    icon: Shield,
    title: 'Data Privacy',
    description: 'We maintain strict data protection standards and respect creator privacy.'
  },
  {
    icon: Target,
    title: 'Efficiency',
    description: 'Our platform is designed to make creator outreach simple and effective.'
  }
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About - SimpliMail"
        description="Learn about SimpliMail's mission to connect brands with TikTok creators"
        keywords={['about', 'mission', 'values']}
      />
      <Container className="py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-gray-600">
            SimpliMail makes it easy for brands to connect with TikTok creators,
            fostering authentic partnerships that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg">
              <p>
                Founded in 2024, SimpliMail was born from the recognition that
                connecting with TikTok creators shouldn't be complicated or expensive.
                Our platform provides a straightforward way for brands to find and
                reach out to creators, while ensuring creator privacy and data protection.
              </p>
              <p>
                Today, we're proud to help thousands of brands build authentic
                relationships with creators, driving meaningful engagement and results
                across the TikTok platform.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}