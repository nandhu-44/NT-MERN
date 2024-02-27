import { createClient } from '@supabase/supabase-js'

const { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_API_KEY } = process.env;
const supabaseClient = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_API_KEY);

export default supabaseClient;