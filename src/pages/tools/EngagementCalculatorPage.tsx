import React, { useState } from 'react';
import { Calculator, Percent } from 'lucide-react';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import SEO from '../../components/common/SEO';

export default function EngagementCalculatorPage() {
  const [followers, setFollowers] = useState('');
  const [likes, setLikes] = useState('');
  const [comments, setComments] = useState('');
  const [shares, setShares] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateEngagement = () => {
    const totalEngagements = Number(likes) + Number(comments) + Number(shares);
    const rate = (totalEngagements / Number(followers)) * 100;
    setResult(Number(rate.toFixed(2)));
  };

  return (
    <>
      <SEO
        title="TikTok Engagement Rate Calculator - SimpliMail"
        description="Calculate your TikTok engagement rate with our free tool. Understand your content performance."
        keywords={['engagement rate', 'tiktok analytics', 'social media metrics', 'content performance']}
        canonical="/tools/engagement-calculator"
      />
      <Container className="py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              TikTok Engagement Rate Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Calculate your true engagement rate based on likes, comments, and shares
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Followers
                </label>
                <input
                  type="number"
                  value={followers}
                  onChange={(e) => setFollowers(e.target.value)}
                  placeholder="Enter total followers"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Likes
                </label>
                <input
                  type="number"
                  value={likes}
                  onChange={(e) => setLikes(e.target.value)}
                  placeholder="Enter total likes"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comments
                </label>
                <input
                  type="number"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Enter total comments"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Shares
                </label>
                <input
                  type="number"
                  value={shares}
                  onChange={(e) => setShares(e.target.value)}
                  placeholder="Enter total shares"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <Button
              onClick={calculateEngagement}
              disabled={!followers || !likes}
              className="w-full mb-6"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Engagement Rate
            </Button>

            {result !== null && (
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center text-3xl font-bold text-gray-900">
                  {result}%
                  <Percent className="w-6 h-6 ml-1" />
                </div>
                <p className="text-gray-600 mt-2">Engagement Rate</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}