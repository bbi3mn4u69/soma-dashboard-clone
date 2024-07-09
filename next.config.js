/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: [
      'puppeteer-extra', 
      'puppeteer-extra-plugin-stealth',
      'puppeteer-extra-plugin-recaptcha',
    ],
  },
};

export default config;
