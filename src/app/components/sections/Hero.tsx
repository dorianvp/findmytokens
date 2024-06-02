import Image from "next/image";
import Link from "next/link";
import heroBg from '../../../../public/hero-bg.svg'
import heroWave from '../../../../public/hero-wave.svg'
import { HeroForm } from "../hero-form";

export function Hero() {
	return (
		<section className="flex flex-col p-3 md:p-5 min-h-screen">
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
			<div className="flex items-center p-6 md:p-12 min-h-screen">
				<div className="w-full lg:w-1/2">
					<h1 className="my-5 text-white text-4xl md:text-6xl"><b>Find Out Which Exchanges Sent Or Received Tokens From Your Wallet</b></h1>
					<h3 className="my-5 text-white text-base md:text-xl">FindMyCoins analyses wallet transactions and matches them to the addresses of centralized exchanges, helping to recover drained accounts, check for unclaimed balances, and better recordkeeping.
					</h3>
					<HeroForm />
				</div>
				<span className="w-0 lg:w-1/2" />
			</div>
		</section>
	)
}