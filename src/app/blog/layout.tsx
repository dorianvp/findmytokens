import { NavBar } from "@/components/NavBar/navbar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section className="flex min-h-screen flex-col items-center justify-start bg-dark-purple p-3 md:p-5">
			<NavBar />
			{children}
		</section>
	);
}