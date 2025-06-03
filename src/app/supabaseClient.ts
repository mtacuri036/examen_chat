import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://rvagmsjmbioxmfudfney.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2YWdtc2ptYmlveG1mdWRmbmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5ODQ3NTEsImV4cCI6MjA2NDU2MDc1MX0.M4Sn1NgUoZXVfr-3PhRKWqSjyLcopRnEIssjmiUVdN4'               // Reemplaza con tu public anon key
);