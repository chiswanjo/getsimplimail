import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateMetaTags, formatCanonicalUrl } from '../../utils/seo';
import { SEOProps } from '../../types';

export default function SEO({ title, description, keywords, canonical }: SEOProps) {
  const metaTags = generateMetaTags(
    title,
    description,
    keywords,
    canonical ? formatCanonicalUrl(canonical) : undefined
  );

  return (
    <Helmet>
      <title>{title}</title>
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      {canonical && <link rel="canonical" href={formatCanonicalUrl(canonical)} />}
    </Helmet>
  );
}