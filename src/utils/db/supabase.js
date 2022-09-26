import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://ndncrvwlfhocqcjshcvh.supabase.co'
// const supabaseKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbmNydndsZmhvY3FjanNoY3ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM0ODU0NDIsImV4cCI6MTk3OTA2MTQ0Mn0.ma5xElpFLN1etm9QPd4Bg3tSS9BnWXL_4rjLXCMzAy8'

const supabaseUrl = 'https://achukxynlddpnqdphntz.supabase.co'

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjaHVreHlubGRkcG5xZHBobnR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIzNTY3NDMsImV4cCI6MTk3NzkzMjc0M30.PkL2ZXSPchGZIwEijogOHN__tD7XPSqTn8L5MSWqe0A'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
