/** @type {import('next').NextConfig} */

module.exports = () => {
    const isDevelopment = process.env.NODE_ENV === "development";
    const nextConfig = {
        images: {
            domains: ["is1-ssl.mzstatic.com", "is2-ssl.mzstatic.com", "is3-ssl.mzstatic.com", "is4-ssl.mzstatic.com", "is5-ssl.mzstatic.com"]
        },
    
        ...(isDevelopment && {
            mode: "development",
            webpack: (config, {isServer}) => {
                config.optimization.minimize = false;
                return config;
            }
        })
    }
    
    return nextConfig;
}
