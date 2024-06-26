import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://findmytokens.com',
			lastModified: new Date(),
			changeFrequency: 'yearly',
		}
	]
}