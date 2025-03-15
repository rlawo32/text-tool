import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NextJS Static Build (package.json에서 next export가 있다면 제거해야함)
  output: 'export',
};

export default nextConfig;
