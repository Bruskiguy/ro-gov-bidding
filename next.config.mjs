/** @type {import('next').NextConfig} */
const nextConfig = {//will change later when images are from DB
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/photos/**',
            },
        ],
    },
};

export default nextConfig;

