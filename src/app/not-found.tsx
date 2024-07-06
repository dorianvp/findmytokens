import Link from "next/link";

export default function NotFound() {
	return (
		<section className="flex flex-col items-center justify-center h-screen bg-dark-purple text-white">
			<h1 className="text-4xl font-bold font-mono">Page Not Found. <span></span>
				<Link className="underline" href="/">Back to Home</Link>
			</h1>
		</section>
	)
}