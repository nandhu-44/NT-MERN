import { createClient } from '@supabase/supabase-js'

const supabaseURL = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY;
const supabaseClient = createClient(supabaseURL, supabaseKey);

export default supabaseClient;