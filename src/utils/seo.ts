export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export const generateMetaTags = (
  title: string,
  description: string,
  keywords: string[],
  canonical?: string
): MetaTag[] => {
  const tags: MetaTag[] = [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'robots', content: 'index, follow' }
  ];

  // Open Graph tags
  tags.push(
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'SimpliMail' }
  );

  // Twitter Card tags
  tags.push(
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description }
  );

  if (canonical) {
    const canonicalUrl = formatCanonicalUrl(canonical);
    tags.push(
      { property: 'og:url', content: canonicalUrl },
      { name: 'twitter:url', content: canonicalUrl }
    );
  }

  return tags;
};

export const formatCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://simplimail.xyz';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};