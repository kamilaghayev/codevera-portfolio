/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    images: {
        domains: ['cavid.s3.eu-north-1.amazonaws.com'],
    },
};

export default nextConfig;
