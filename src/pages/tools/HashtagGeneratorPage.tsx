import React, { useState } from 'react';
import { Hash, Copy, Check } from 'lucide-react';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import SEO from '../../components/common/SEO';

export default function HashtagGeneratorPage() {
  const [niche, setNiche] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generateHashtags = () => {
    // Simple example - in production, this would use a more sophisticated algorithm
    const nicheHashtags = [
      `#${niche}`,
      `#${niche}Creator`,
      `#${niche}TikTok`,
      `#${niche}Tips`,
      `#viral${niche}`,
      `#trending${niche}`,
      `#${niche}Community`,
      `#learn${niche}`,
      `#${niche}Life`,
      `#${niche}Tutorial`
    ].map(tag => tag.replace(/\s+/g, ''));
    
    setHashtags(nicheHashtags);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hashtags.join(' '));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEO
        title="Free TikTok Hashtag Generator - SimpliMail"
        description="Generate engaging TikTok hashtags for your content. Free tool to boost your TikTok reach."
        keywords={['tiktok hashtags', 'hashtag generator', 'social media tools', 'content creation']}
        canonical="/tools/hashtag-generator"
      />
      <Container className="py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">TikTok Hashtag Generator</h1>
            <p className="text-xl text-gray-600">
              Generate relevant hashtags for your TikTok content
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter your content niche
              </label>
              <input
                type="text"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                placeholder="e.g., Fashion, Cooking, Tech"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <Button
              onClick={generateHashtags}
              disabled={!niche}
              className="w-full mb-6"
            >
              <Hash className="w-4 h-4 mr-2" />
              Generate Hashtags
            </Button>

            {hashtags.length > 0 && (
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex flex-wrap gap-2">
                    {hashtags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={copyToClipboard}
                  className="w-full"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy All Hashtags
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}