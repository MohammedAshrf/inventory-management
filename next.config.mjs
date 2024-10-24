/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["s3-inventorymanagement.s3.us-east-2.amazonaws.com"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-inventorymanagement.s3.us-east-2.amazonaws.com",
        port: "", // Leave blank for default ports
        pathname: "/**", // Allows any path in this domain
      },
    ],
  },
};

export default nextConfig;
