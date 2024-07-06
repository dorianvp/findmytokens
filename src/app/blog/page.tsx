import { client } from "../../../sanity/lib/client";
import { PostList } from "@/components/blog/post-list";

export type Post = {
	_id: string
	title: string
	slug?: {
		current: string
	},
	mainImage: string
}

export default async function Blog() {
	const posts = await client.fetch<any>(`*[_type == "post"] {
		_id,
		title,
		slug,
		"mainImage": mainImage.asset->url
	}`)
	return (
		<section
			className="flex flex-col items-start justify-start bg-dark-purple text-white w-full h-full"
		>
			<h1 className="text-8xl font-bold">All Posts</h1>
			<PostList posts={posts} />
		</section>
	)
}