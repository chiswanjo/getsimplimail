import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import Container from '../../components/common/Container';
import GradientHeading from '../../components/common/GradientHeading';
import SEO from '../../components/common/SEO';
import { blogPosts } from '../../data/blog-posts';
import ReactMarkdown from 'react-markdown';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO
        title={`${post.title} - SimpliMail Blog`}
        description={post.metaDescription}
        keywords={post.metaKeywords}
        canonical={`https://simplimail.xyz/blog/${post.slug}`}
      />
      <Container className="py-20">
        <article className="max-w-3xl mx-auto">
          <GradientHeading className="mb-8">
            {post.title}
          </GradientHeading>

          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="flex items-center justify-between mb-8 text-sm text-gray-600">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>{post.author}</span>
              <span className="mx-2">·</span>
              <span>{post.authorRole}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.publishedAt).toLocaleDateString()}
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <GradientHeading level={1} className="mt-12 mb-6">
                    {children}
                  </GradientHeading>
                ),
                h2: ({ children }) => (
                  <GradientHeading level={2} className="mt-10 mb-4">
                    {children}
                  </GradientHeading>
                ),
                h3: ({ children }) => (
                  <GradientHeading level={3} className="mt-8 mb-4">
                    {children}
                  </GradientHeading>
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </Container>
    </>
  );
}