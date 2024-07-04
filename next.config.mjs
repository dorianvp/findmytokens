/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.csv$/,
			use: [
				{
					loader: 'csv-loader',
					options: {
						dynamicTyping: true,
						header: true,
						skipEmptyLines: true,
					},
				},
			],
		});

		return config
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.producthunt.com',
				port: '',
				pathname: '/widgets/**'
			},
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
				pathname: '/images/**'
			},
		],
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	}
};

export default nextConfig;
