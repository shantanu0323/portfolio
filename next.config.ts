import type { NextConfig } from "next";

const repoName = "portfolio";

const nextConfig: NextConfig = {
    /* config options here */
    output: "export", // <- this enables static export
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
};

export default nextConfig;
