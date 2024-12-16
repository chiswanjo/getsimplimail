import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import Container from '../components/common/Container';
import GradientHeading from '../components/common/GradientHeading';
import SEO from '../components/common/SEO';
import { blogPosts } from '../data/blog-posts';

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog - SimpliMail"
        description="Latest insights and tips about TikTok creator outreach and marketing"
        keywords={['blog', 'insights', 'tips', 'marketing', 'tiktok', 'creators']}
        canonical="https://simplimail.xyz/blog"
      />
      <Container className="py-20">
        <GradientHeading className="text-center mb-12">
          Latest Insights
        </GradientHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <Link to={`/blog/${post.slug}`}>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 hover:text-gray-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}