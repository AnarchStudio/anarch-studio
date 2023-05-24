/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },

  redirects: async () => [
    {
      source: "/:path*",
      has: [{ type: "host", value: "astrasurge.com" }],
      destination: "https://www.astrasurge.com/:path*",
      permanent: true,
    },
  ],
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
