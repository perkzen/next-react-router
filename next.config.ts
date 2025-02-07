import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    rewrites: async () => {
    return [
      {
        source: "/:path*",
        destination: "/static-app-shell",
      },
    ];
    }
};

export default nextConfig;
