const CONFIG = {
    SUPABASE: {
        PROJECT_URL: process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL,
        ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    },
    RESEND: {
        API_KEY: process.env.RESEND_API_KEY
    },
    MUX: {
        TOKEN_SECRET: process.env.MUX_TOKEN_SECRET,
        MUX_TOKEN_ID: process.env.MUX_TOKEN_ID
    }
}

export default CONFIG