import { createClient } from '@supabase/supabase-js';
import { Database } from './types';

const supabaseUrl = 'https://sxiquvamopdqrpgleecj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4aXF1dmFtb3BkcXJwZ2xlZWNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxOTc1NDAsImV4cCI6MjA0OTc3MzU0MH0.iY5j2uAU46Z_EAqv-Ov4skhiATWj_5Vq_bfAZG-rOeM';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);