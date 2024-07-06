import { Post } from "@/app/blog/page";
import { PostPreview } from "./post-preview";

export function PostList({ posts }: { posts: Post[] }) {
	return (
		<section className="container grid grid-cols-1 divide-y divide-blue-100 p-0">
			<ul className="grid grid-cols-1 md:grid-cols-4 gap-8">
				{posts?.length > 0 ? (
					posts.map((post) => (
						<PostPreview post={post} key={post._id} />
					))
				) : (
					<div className="p-4 text-red-500">No posts found</div>
				)}
			</ul>
		</section>
	);
}