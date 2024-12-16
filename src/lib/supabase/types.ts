export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          created_at: string
          updated_at: string
          credits: number
          stripe_customer_id: string | null
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          created_at?: string
          updated_at?: string
          credits?: number
          stripe_customer_id?: string | null
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          created_at?: string
          updated_at?: string
          credits?: number
          stripe_customer_id?: string | null
        }
      }
      creators: {
        Row: {
          id: string
          username: string
          full_name: string
          email: string
          avatar_url: string
          followers_count: number
          category: string
          engagement_rate: number
          is_verified: boolean
          created_at: string
          updated_at: string
          contact_price: number
          bio: string | null
          location: string | null
          website: string | null
        }
        Insert: {
          id?: string
          username: string
          full_name: string
          email: string
          avatar_url: string
          followers_count: number
          category: string
          engagement_rate: number
          is_verified?: boolean
          created_at?: string
          updated_at?: string
          contact_price: number
          bio?: string | null
          location?: string | null
          website?: string | null
        }
        Update: {
          id?: string
          username?: string
          full_name?: string
          email?: string
          avatar_url?: string
          followers_count?: number
          category?: string
          engagement_rate?: number
          is_verified?: boolean
          created_at?: string
          updated_at?: string
          contact_price?: number
          bio?: string | null
          location?: string | null
          website?: string | null
        }
      }
      unlocked_contacts: {
        Row: {
          id: string
          user_id: string
          creator_id: string
          created_at: string
          transaction_id: string
        }
        Insert: {
          id?: string
          user_id: string
          creator_id: string
          created_at?: string
          transaction_id: string
        }
        Update: {
          id?: string
          user_id?: string
          creator_id?: string
          created_at?: string
          transaction_id?: string
        }
      }
      transactions: {
        Row: {
          id: string
          user_id: string
          amount: number
          status: 'pending' | 'completed' | 'failed'
          created_at: string
          stripe_payment_intent_id: string
          credits_added: number
        }
        Insert: {
          id?: string
          user_id: string
          amount: number
          status?: 'pending' | 'completed' | 'failed'
          created_at?: string
          stripe_payment_intent_id: string
          credits_added: number
        }
        Update: {
          id?: string
          user_id?: string
          amount?: number
          status?: 'pending' | 'completed' | 'failed'
          created_at?: string
          stripe_payment_intent_id?: string
          credits_added?: number
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          excerpt: string
          author_id: string
          published_at: string | null
          created_at: string
          updated_at: string
          meta_description: string
          meta_keywords: string[]
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          excerpt: string
          author_id: string
          published_at?: string | null
          created_at?: string
          updated_at?: string
          meta_description: string
          meta_keywords?: string[]
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string
          author_id?: string
          published_at?: string | null
          created_at?: string
          updated_at?: string
          meta_description?: string
          meta_keywords?: string[]
        }
      }
    }
    Views: {
      creator_stats: {
        Row: {
          creator_id: string
          total_unlocks: number
          last_30_days_unlocks: number
        }
      }
    }
    Functions: {
      search_creators: {
        Args: {
          search_query: string
          category_filter?: string
          min_followers?: number
          max_followers?: number
          min_engagement?: number
          max_engagement?: number
          is_verified?: boolean
          limit?: number
          offset?: number
        }
        Returns: {
          id: string
          username: string
          full_name: string
          avatar_url: string
          followers_count: number
          category: string
          engagement_rate: number
          is_verified: boolean
          contact_price: number
        }[]
      }
    }
  }
}