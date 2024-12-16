import { LucideIcon } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
}

export interface Creator {
  id: string;
  username: string;
  fullName: string;
  avatarUrl: string;
  followers: number;
  category: string;
  engagement: number;
  isVerified: boolean;
}

export interface SearchFilters {
  query: string;
  category: string;
  minFollowers?: number;
  maxFollowers?: number;
  minEngagement?: number;
  maxEngagement?: number;
  isVerified?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  imageUrl: string;
  metaDescription: string;
  metaKeywords: string[];
}