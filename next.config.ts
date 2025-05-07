import type { NextConfig } from "next";

const repoName = "portfolio";

const nextConfig: NextConfig = {
    /* config options here */
    output: "export", // <- this enables static export
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? `/${repoName}`: "",
    assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/`: "/",
};

export default nextConfig;
