import { Post } from "@/app/blog/page";
import Image from "next/image";
import Link from "next/link";

export async function PostPreview({ post }: { post: Post }) {
	return (
		<Link
			href={`/blog/${post.slug?.current}`}
			className="h-72 hover:shadow-lg hover:scale-105 transition-transform bg-indigo-950 rounded-3xl overflow-clip flex flex-col justify-start items-start"
		>
			<div className="relative h-1/2 w-full">
				<Image
					src={post.mainImage}
					alt={post.title}
					objectFit="cover"
					fill
					className="w-full"
				/>
			</div>
			<h4 className="font-mono h-1/2">{post.title}</h4>
		</Link>
	)
}