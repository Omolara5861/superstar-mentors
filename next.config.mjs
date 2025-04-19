/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    },
    // Optionally add rewrites if you want to proxy API calls locally to solve CORS issues:
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `https://ssm.digitalcareers.academy/api/:path*`,
            },
        ];
    },
};

export default nextConfig;
