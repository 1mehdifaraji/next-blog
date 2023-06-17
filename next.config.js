/** @type {import('next').NextConfig} */
const nextConfig = {
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
        destination: "/blog/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
