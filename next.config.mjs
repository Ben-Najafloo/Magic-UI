/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'creativityqf.b-cdn.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;