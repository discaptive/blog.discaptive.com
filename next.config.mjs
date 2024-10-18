/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // 모든 호스트네임을 허용
      },
      {
        protocol: "http",
        hostname: "**", // HTTP 프로토콜의 모든 호스트네임도 허용
      },
    ],
  },
};

export default nextConfig;
