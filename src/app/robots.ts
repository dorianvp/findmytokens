import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			disallow: '/return',
		},
		sitemap: 'https://findmytokens.com/sitemap.xml',
	}
}