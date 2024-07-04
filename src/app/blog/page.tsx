import { client } from "../../../sanity/lib/client";

type Post = {
	_id: string
	title?: string
	slug?: {
		current: string
	}
}

export default async function PostIndex() {
	const posts = await client.fetch<Post[]>(`*[_type == "post"]`)

	return (
		<ul>
			{posts.map((post) => (
				<li key={post._id}>
					<a href={`blog/${post?.slug?.current}`}>{post?.title}</a>
				</li>
			))}
		</ul>
	)
}