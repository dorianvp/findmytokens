import { HTMLAttributes } from "react";
import { ArrowIcon } from "../icons/arrow";

export function Pricing() {
	return (
		<section className="bg-gray w-full flex flex-col items-center justify-center p-10">
			<h2 className="mb-5">
				<b>
					Pricing
				</b>
			</h2>
			<h4>Straightforward pricing based on the amount of wallets you need analyzed</h4>
			<section className="flex justify-between items-center my-5 w-10/12">
				<PriceCard title="$29.99" desc="1 Wallet Report" className="mr-5" />
				<PriceCard title="$99.99" desc="4 Wallet Report" className="mr-5" />
				<PriceCard title="$150.00" desc="7 Wallet Report" />
			</section>
			<div className="flex flex-col px-10 py-5 bg-white items-center justify-center rounded-xl mx-5 w-10/12">
				<p className="text-purple">INSTITUTIONAL</p>
				<h3 className="py-5">
					<b>
						Need help with more wallets?
					</b>
				</h3>
				<h3 className="pb-5">
					<b>
						Do you require a deeper analysis?
					</b>
				</h3>
				<button
					className="bg-purple text-white w-fit px-6 py-4 rounded-lg flex align-middle items-center">
					Contact Us
				</button>
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
		<div className={`flex flex-col px-10 py-5 bg-white items-center justify-center rounded-xl grow ${className}`}>
			<p className="text-purple">STARTER</p>
			<h2>
				{title}
			</h2>
			<p className="p-5">
				<b>
					{desc}
				</b>
			</p>
			<button
				className="bg-indigo-600 text-white w-fit px-6 py-4 rounded-lg flex align-middle items-center">
				Get Report Now
				<ArrowIcon className="w-6 h-6" />
			</button>
		</div>
	)
}