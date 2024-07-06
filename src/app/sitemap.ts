import { MetadataRoute } from 'next'
import { client } from '../../sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const staticPages = [
		{
			url: 'https://findmytokens.com',
			lastModified: new Date(),
			changeFrequency: 'yearly',
		},
		{
			url: 'https://findmytokens.com/blog',
			lastModified: new Date(),
			changeFrequency: 'monthly',
		}
	]

	const blogPosts = await client.fetch<any>(`*[_type == "post"] {
		_id,
		title,
		slug
	}`)

	const dynamicPages = blogPosts.map((post: any) => ({
		url: `https://findmytokens.com/blog/${post.slug.current}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
	}))

	return [...staticPages, ...dynamicPages];
}