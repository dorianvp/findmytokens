import { QueryParams, SanityDocument } from "next-sanity"
import { notFound } from "next/navigation"

import { POSTS_QUERY, POST_QUERY } from "../../../../sanity/lib/queries";
import Post from "../../../components/blog/post"
import { sanityFetch } from "../../../../sanity/lib/fetch"
import { Metadata } from "next";


export async function generateStaticParams() {
	const posts = await sanityFetch<SanityDocument[]>({
		query: POSTS_QUERY,
		perspective: "published",
		stega: false,
	})

	return posts.map((post) => ({
		slug: post.slug.current,
	}))
}

export async function generateMetadata({ params }: { params: QueryParams }): Promise<Metadata> {
	const post = await sanityFetch<SanityDocument>({ query: POST_QUERY, params })
	if (!post) {
		return notFound()
	}
	return {
		title: post.title,
		metadataBase: new URL("https://findmytokens.com/blog/"),
		alternates: {
			canonical: `https://findmytokens.com/blog/${post.slug.current}`,
		},
		icons: {
			icon: '/favicon.ico',
		},
		openGraph: {
			title: post.title,
			description: post.description,
			url: `https://findmytokens.com/blog/${post.slug.current}`,
			siteName: 'FindMyTokens',
			type: "article"
		}
	}
}

export default async function Page({ params }: { params: QueryParams }) {
	const post = await sanityFetch<SanityDocument>({ query: POST_QUERY, params })
	if (!post) {
		return notFound()
	}
	return <Post post={post} />
}