/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "videos-rockstargames-com.akamaized.net",
        port: "",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;
