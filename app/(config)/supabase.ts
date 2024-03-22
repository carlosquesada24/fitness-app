import { createClient } from "@supabase/supabase-js";
import CONFIG from "./config";


export const supabase = createClient(
    CONFIG.SUPABASE.PROJECT_URL ?? "",
    CONFIG.SUPABASE.ANON_KEY ?? ""
  );
