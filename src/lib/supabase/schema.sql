-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Create enum types
CREATE TYPE transaction_status AS ENUM ('pending', 'completed', 'failed');

-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  credits INTEGER DEFAULT 0,
  stripe_customer_id TEXT UNIQUE
);

-- Create creators table
CREATE TABLE creators (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  avatar_url TEXT NOT NULL,
  followers_count INTEGER NOT NULL,
  category TEXT NOT NULL,
  engagement_rate DECIMAL(5,2) NOT NULL,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  contact_price INTEGER NOT NULL,
  bio TEXT,
  location TEXT,
  website TEXT
);

-- Create unlocked_contacts table
CREATE TABLE unlocked_contacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  creator_id UUID NOT NULL REFERENCES creators(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  transaction_id UUID NOT NULL,
  UNIQUE(user_id, creator_id)
);

-- Create transactions table
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  status transaction_status DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  stripe_payment_intent_id TEXT UNIQUE NOT NULL,
  credits_added INTEGER NOT NULL
);

-- Create blog_posts table
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  author_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  meta_description TEXT NOT NULL,
  meta_keywords TEXT[] DEFAULT '{}'::TEXT[]
);

-- Create indexes
CREATE INDEX creators_category_idx ON creators(category);
CREATE INDEX creators_followers_idx ON creators(followers_count);
CREATE INDEX creators_engagement_idx ON creators(engagement_rate);
CREATE INDEX blog_posts_slug_idx ON blog_posts(slug);
CREATE INDEX blog_posts_published_idx ON blog_posts(published_at);

-- Create creator_stats view
CREATE VIEW creator_stats AS
SELECT 
  c.id as creator_id,
  COUNT(uc.id) as total_unlocks,
  COUNT(
    CASE 
      WHEN uc.created_at >= NOW() - INTERVAL '30 days' 
      THEN 1 
    END
  ) as last_30_days_unlocks
FROM creators c
LEFT JOIN unlocked_contacts uc ON c.id = uc.creator_id
GROUP BY c.id;

-- Create search_creators function
CREATE OR REPLACE FUNCTION search_creators(
  search_query TEXT,
  category_filter TEXT DEFAULT NULL,
  min_followers INTEGER DEFAULT NULL,
  max_followers INTEGER DEFAULT NULL,
  min_engagement DECIMAL DEFAULT NULL,
  max_engagement DECIMAL DEFAULT NULL,
  is_verified BOOLEAN DEFAULT NULL,
  result_limit INTEGER DEFAULT 10,
  result_offset INTEGER DEFAULT 0
)
RETURNS TABLE (
  id UUID,
  username TEXT,
  full_name TEXT,
  avatar_url TEXT,
  followers_count INTEGER,
  category TEXT,
  engagement_rate DECIMAL,
  is_verified BOOLEAN,
  contact_price INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    c.id,
    c.username,
    c.full_name,
    c.avatar_url,
    c.followers_count,
    c.category,
    c.engagement_rate,
    c.is_verified,
    c.contact_price
  FROM creators c
  WHERE
    (search_query IS NULL OR 
     c.username ILIKE '%' || search_query || '%' OR
     c.full_name ILIKE '%' || search_query || '%')
    AND (category_filter IS NULL OR c.category = category_filter)
    AND (min_followers IS NULL OR c.followers_count >= min_followers)
    AND (max_followers IS NULL OR c.followers_count <= max_followers)
    AND (min_engagement IS NULL OR c.engagement_rate >= min_engagement)
    AND (max_engagement IS NULL OR c.engagement_rate <= max_engagement)
    AND (is_verified IS NULL OR c.is_verified = is_verified)
  ORDER BY c.followers_count DESC
  LIMIT result_limit
  OFFSET result_offset;
END;
$$ LANGUAGE plpgsql;