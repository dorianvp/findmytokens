export default function Address({ params }: { params: { address: string } }) {
	return (
		<main className="flex h-screen w-screen flex-col items-center justify-center">
			<h2>Loading data for: {params.address}</h2>
		</main>
	);
}
