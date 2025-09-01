/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    NEXT_PUBLIC_OPENAI_MODEL: process.env.NEXT_PUBLIC_OPENAI_MODEL,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,
    STRIPE_SECRET: process.env.STRIPE_SECRET,
    NEXT_PUBLIC_STRIPE_SUCCESS_URL: process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL,
    NEXT_PUBLIC_STRIPE_CANCEL_URL: process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    FROM_EMAIL: process.env.FROM_EMAIL,
    AFFILIATE_DEFAULT_LINK: process.env.AFFILIATE_DEFAULT_LINK,
    FREE_PLAN_LIMIT_PER_WEEK: process.env.FREE_PLAN_LIMIT_PER_WEEK,
    PLAUSIBLE_URL: process.env.PLAUSIBLE_URL
  }
}

module.exports = nextConfig;
