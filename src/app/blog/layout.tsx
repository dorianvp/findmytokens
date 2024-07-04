import { sanityFetch } from "../../../sanity/lib/fetch"

type HomePageProps = {
	_id: string
	title?: string
	navItems: any[]
}

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
	// revalidate if there are changes to either the home document or to a page document (since they're referenced to in navItems)
	const home = await sanityFetch<HomePageProps>({
		query: `*[_id == "home"][0]{...,navItems[]->}`,
		tags: ['home', 'page']
	})

	return (
		<main>
			<nav>
				<span>{home?.title}</span>
				<ul>
					{home?.navItems.map(navItem => {
						return (
							< li key={navItem._id} >
								<a href={navItem?.slug?.current}>
									{navItem?.title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
			{children}
		</main >
	)
}