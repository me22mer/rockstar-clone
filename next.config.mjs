/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "videos-rockstargames-com.akamaized.net", // Add this hostname
        port: "",
        pathname: "/**", // Allow any path from this hostname
      },
    ],
  },
};

export default nextConfig;
