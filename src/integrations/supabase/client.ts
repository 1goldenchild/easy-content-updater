// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rqklestpzesrdeupnkau.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxa2xlc3RwemVzcmRldXBua2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxODY5MzksImV4cCI6MjA1MTc2MjkzOX0.ntG6yhsZWKALXoB3pXw11CgocimdaHnQ85TRjmWTNGo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);