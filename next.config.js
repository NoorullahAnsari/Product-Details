/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.ctfassets.net",
      "images.wsj.net",
      "media.istockphoto.com",
      "stimg.cardekho.com",
    ],
  },
};

module.exports = nextConfig;
