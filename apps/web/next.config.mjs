/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    serverComponentsExternalPackages: ['pino'],
  },
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'],
};

export default config;
