import * as React from "react"
import Link from "next/link"

import {
	NavigationMenu,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function NavBar() {
	return (
		<header className="top-0 z-50 w-full bg-transparent text-white">
			<div className="flex items-start justify-start">
				<Link href="/" className="flex items-center gap-2" prefetch={false}>
					<h1 className="w-fit text-2xl">
						<b className="font-mono">
							FindMyTokens
						</b>
					</h1>
					<span className="sr-only">FindMyTokens</span>
				</Link>
				<div className="flex mx-4">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuLink asChild>
								<Link
									href="/blog"
									className="px-4 py-2 text-sm font-medium"
									prefetch={false}
								>
									Blog
								</Link>
							</NavigationMenuLink>
						</NavigationMenuList>
						<NavigationMenuList>
							<NavigationMenuLink asChild>
								<Link
									href="/about"
									className="px-4 py-2 text-sm font-medium"
									prefetch={false}
								>
									About
								</Link>
							</NavigationMenuLink>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</header>
	)
}
