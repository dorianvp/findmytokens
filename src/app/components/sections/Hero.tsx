import Image from "next/image";
import Link from "next/link";
import heroBg from '../../../../public/hero-bg.svg'
import heroWave from '../../../../public/hero-wave.svg'

export function Hero() {
	return (
		<section className="flex flex-col p-5 w-screen h-screen">
			<Image
				src={heroBg}
				alt="background"
				quality={100}
				fill
				sizes="100vw"
				className="object-cover fixed -z-10"
			/>
			<Image
				src={heroWave}
				alt="background"
				quality={100}
				sizes="100vw"
				className="object-fill absolute right-0 bottom-0 w-full -z-10"
			/>
			<nav className="w-full">
				<h3 className="text-white w-fit">
					<b>
						<Link href='/'>
							FindMyTokens
						</Link>
					</b>
				</h3>
			</nav>
			<div className="flex items-center p-12 h-screen">
				<div className="w-full lg:w-1/2">
					<h1 className="my-5 text-white"><b>Find Unclaimed Tokens On Forgotten Exchange Accounts</b></h1>
					<h3 className="my-5 text-white">FindMyCoins analyses your wallet transactions and matches it to the vaults of centralized exchanges,
						it generates a list of names that you have used in the past, to log in and check for unclaimed balance.
					</h3>
					<div className="flex flex-col p-5 mt-2 w-full bg-white rounded-xl md:mt-10 lg:mt-20 lg:flex-row">
						<input
							type="text"
							placeholder="Address"
							className="flex-grow px-2 py-4 w-full bg-white rounded-2xl border border-gray-300 border-solid lg:mx-2 lg:w-max"
						/>
						<button
							className="px-5 py-4 mt-5 w-full text-white bg-red-500 rounded-full lg:mt-0 lg:w-fit"
						>
							Generate Report
						</button>
					</div>
				</div>
				<span className="w-0 lg:w-1/2" />
			</div>
		</section>
	)
}