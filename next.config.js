const fs = require("fs");
const path = require("path");
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.dropbox.com" },
      { protocol: "https", hostname: "dl.dropboxusercontent.com" },
      { protocol: "https", hostname: "zamakan.suwa.io" },
      { protocol: "https", hostname: "zamakanweb1.suwa.io" },
    ],
  },
  i18n,
};

try {
  const LOCALES_DIR = path.join("public", "locales");
  const locales = fs
    .readdirSync(LOCALES_DIR)
    .filter((dir) => fs.statSync(path.join(LOCALES_DIR, dir)).isDirectory());

  nextConfig.i18n = {
    locales,
    defaultLocale: "ar", // Set your preferred default locale
    localeDetection: false,
  };
} catch (error) {
  console.warn(
    "Could not dynamically load locales, using default settings:",
    error
  );
  nextConfig.i18n = {
    locales: ["ar", "en"], // Fallback locales
    defaultLocale: "ar", // Fallback default locale
    localeDetection: false,
  };
}

module.exports = nextConfig;
