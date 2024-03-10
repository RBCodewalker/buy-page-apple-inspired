/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '127.0.0.1',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
