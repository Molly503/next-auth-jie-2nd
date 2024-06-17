import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  image: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
