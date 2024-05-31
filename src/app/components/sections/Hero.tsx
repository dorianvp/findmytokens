import Image from "next/image";
import Link from "next/link";
import heroBg from '../../../../public/hero-bg.svg'
import heroWave from '../../../../public/hero-wave.svg'
import { HeroForm } from "../hero-form";

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
				className="object-fill absolute -left-0 -bottom-1 w-full -z-10"
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
					<HeroForm />
				</div>
				<span className="w-0 lg:w-1/2" />
			</div>
		</section>
	)
}