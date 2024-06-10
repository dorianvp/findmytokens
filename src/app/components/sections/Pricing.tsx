'use client'

import { HTMLAttributes } from "react";
import { ArrowIcon } from "../icons/arrow";
import { scrollToTop } from "@/utils/browser";
import Link from "next/link";

export function Pricing() {
	return (
		<section className="bg-gray w-full flex flex-col items-center justify-center p-10 min-h-screen">
			<h2 className="mb-5">
				<b>
					Pricing
				</b>
			</h2>
			<section className="flex justify-between items-center my-10 w-full md:w-8/12">
				<PriceCard title="$14.99" desc="1 Wallet Report" className="w-full" />
				{/* <PriceCard title="$99.99" desc="4 Wallet Report" className="mr-5" />
				<PriceCard title="$150.00" desc="7 Wallet Report" /> */}
			</section>
			<div className="flex flex-col px-10 py-5 bg-white items-center justify-center rounded-xl mx-5 w-full md:w-8/12">
				<p className="text-purple">INSTITUTIONAL</p>
				<h3 className="py-5 text-center">
					<b className="font-mono">
						Need help with more wallets?
					</b>
				</h3>
				<h3 className="pb-5 text-center">
					<b className="font-mono">
						Do you require a deeper analysis?
					</b>
				</h3>
				<Link
					className="bg-purple text-white w-fit px-6 py-4 rounded-lg flex align-middle items-center"
					href={'mailto:support@findmytokens.com'}
				>
					Contact Us
				</Link>
			</div>
		</section>
	)
}

type PriceCardProps = {
	title: string;
	desc: string;
}

function PriceCard({ title, desc, className }: PriceCardProps & HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={`flex flex-col px-10 py-8 bg-white items-center justify-center rounded-xl grow ${className}`}>
			<p className="text-purple">STARTER</p>
			<h2 className="font-mono">
				{title}
			</h2>
			<p className="p-5">
				<b className="font-mono">
					{desc}
				</b>
			</p>
			<button
				className="bg-indigo-600 text-white w-fit px-6 py-4 rounded-lg flex align-middle items-center"
				onClick={scrollToTop}
			>
				Get Report Now
				<ArrowIcon className="w-6 h-6" />
			</button>
		</div>
	)
}