/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // backend url
    API_URL: "https://autobizz-425913.uc.r.appspot.com",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
