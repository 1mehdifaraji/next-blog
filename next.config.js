/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    scrollRestoration: false,
  },
  env: {
    URL: "http://localhost:3000",
    LIMIT: 12,
    USERID: 77,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
