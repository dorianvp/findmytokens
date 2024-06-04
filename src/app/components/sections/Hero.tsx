import Image from "next/image";
import Link from "next/link";
import heroBg from '../../../../public/hero-bg.svg'
import heroWave from '../../../../public/hero-wave.svg'
import { HeroForm } from "../hero-form";

export function Hero() {
	return (
		<section className="flex flex-col justify-center items-center p-3 md:p-5 min-h-screen w-full">
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
			<div className="flex flex-col items-center justify-center md:p-12 min-h-screen h-full w-10/12 md:w-8/12">
				<h1 className="my-5 text-white text-center text-4xl md:text-6xl"><b>Find Lost Tokens</b></h1>
				<p className="my-5 text-white text-center text-base md:text-xl h-full">
					FindMyTokens matches wallet transactions to exchange addresses, aiding in account recovery, identifying unclaimed balances, and improving recordkeeping.
				</p>
				<HeroForm />
				<span className="w-0 lg:w-1/2" />
			</div>
		</section>
	)
}