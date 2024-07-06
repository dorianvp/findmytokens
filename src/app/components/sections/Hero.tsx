import Image from "next/image";
import Link from "next/link";
import heroBg from '../../../../public/hero-bg.svg'
import heroWave from '../../../../public/hero-wave.svg'
import { HeroForm } from "../hero-form";
import { NavBar } from "@/components/NavBar/navbar";

export function Hero() {
	return (
		<section className="flex flex-col justify-center items-center p-3 md:p-5 min-h-screen w-full">
			<NavBar />
			<Image
				src={heroBg}
				alt="background"
				quality={75}
				fill
				sizes="100vw"
				className="object-cover fixed -z-10"
			/>
			<Image
				src={heroWave}
				alt="background"
				quality={75}
				sizes="100vw"
				className="object-fill absolute -left-0 -bottom-1 w-full -z-10"
			/>
			<div className="flex flex-col items-center justify-center md:p-12 min-h-screen h-full w-10/12 md:w-8/12">
				<h2 className="my-5 text-white text-center text-4xl md:text-6xl"><b>Recover Hacked Tokens</b></h2>
				<p className="my-5 text-white text-center text-base md:text-xl h-full">
					FindMyTokens matches wallet transactions to exchange deposit addresses. Scan the attacker&apos;s wallet holding your tokens and check exchange interactions, enabling you to report the incident and recover your assets.
				</p>
				<HeroForm />
				<span className="w-0 lg:w-1/2" />
				<a
					className="my-5"
					href="https://www.producthunt.com/posts/findmytokens?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-findmytokens"
					target="_blank"
				>
					<img
						src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=462605&theme=light"
						alt="product-hunt"
						height={250}
						width={250}
					/>
				</a>
			</div>
		</section>
	)
}