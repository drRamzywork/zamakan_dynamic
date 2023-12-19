/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.dropbox.com",
      "zamakan.suwa.io",
      "dl.dropboxusercontent.com",
      "zamakanweb1.suwa.io",
    ],
  },
};

module.exports = nextConfig;
