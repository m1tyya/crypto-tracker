/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		emotion: true,
	},
	distDir: 'dist',
	images: {
		remotePatterns: [
			{
				hostname: 'assets.coingecko.com',
				protocol: 'https',
			},
		],
	},
	reactStrictMode: true,
	swcMinify: true,
	webpack(config) {
		config.module.rules.push({
			issuer: { and: [/\.(js|ts|md)x?$/] },
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

export default nextConfig;
