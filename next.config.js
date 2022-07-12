/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        NEXT_APP_GITHUB_CLIENT_ID: process.env.NEXT_APP_GITHUB_CLIENT_ID,
        NEXT_APP_GITHUB_CLIENT_SECRET:
            process.env.NEXT_APP_GITHUB_CLIENT_SECRET,
    },
    images: {
        domains: ["www.datocms-assets.com"],
    },
};

module.exports = nextConfig;
