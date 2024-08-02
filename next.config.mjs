/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['source.unsplash.com', 'images.unsplash.com', 'unsplash.com',], // 샘플 이미지용 도메인
        minimumCacheTTL: 60 * 30, // 30분
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    }
};

export default nextConfig;
