import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://ndncrvwlfhocqcjshcvh.supabase.co'
// const supabaseKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbmNydndsZmhvY3FjanNoY3ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM0ODU0NDIsImV4cCI6MTk3OTA2MTQ0Mn0.ma5xElpFLN1etm9QPd4Bg3tSS9BnWXL_4rjLXCMzAy8'

const supabaseUrl = 'https://bhkcmgzjldkuvlohfelh.supabase.co'

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoa2NtZ3pqbGRrdXZsb2hmZWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5NTE0NTQsImV4cCI6MTk4MDUyNzQ1NH0.h3UE59Aq42bktXBYD3FQaPzlDkE0JakZmVlJ27Mhffc'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
