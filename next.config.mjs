const nextConfig = {
 distDir: process.env.NEXT_BUILD_DIR || '.next',
 devIndicators: false,
 images: {localPatterns: [{pathname: '/images/**'}]},
};
export default nextConfig;
