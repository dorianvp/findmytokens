'use client'

import Image from "next/image";
import fisherman from '../../../../public/fisherman.svg';
import { ArrowIcon } from "../icons/arrow";
import tickIcon from '../../../../public/tick.svg';
import { scrollToTop } from "@/utils/browser";

export function Chains() {
	return (
		<section className="flex flex-col justify-center items-center py-20 w-full bg-gray">
			<div className="flex justify-center items-center py-20 w-full">
				<div className="flex flex-col px-32">
					<h2 className="my-5 text-center">Works with all major EVM Chains</h2>
					<ul className="flex flex-col justify-evenly items-center h-full xl:items-start">
						<li className="w-1/2">
							<h4 className="inline-flex">
								<Image
									src={tickIcon}
									alt="tick"
									className="mr-2"
								/>
								Ethereum
							</h4>
						</li>
						<li className="w-1/2">
							<h4 className="inline-flex">
								<Image
									src={tickIcon}
									alt="tick"
									className="mr-2"
								/>
								Binance Smart Chain
							</h4>
						</li>
						<li className="w-1/2">
							<h4 className="inline-flex">
								<Image
									src={tickIcon}
									alt="tick"
									className="mr-2"
								/>
								Arbitrum
							</h4>
						</li>
						<li className="w-1/2">
							<h4 className="inline-flex">
								<Image
									src={tickIcon}
									alt="tick"
									className="mr-2"
								/>
								(More coming soon)
							</h4>
						</li>
						{/* <li>
							<h4 className="inline-flex">
								<Image
									src={tickIcon}
									alt="tick"
									className="mr-2"
								/>
								Arbitrum
							</h4>
						</li>
						<li>
							<h4 className="inline-flex">
								<Image
									src={tickIcon}
									alt="tick"
									className="mr-2"
								/>
								Avalanche
							</h4>
						</li> */}
					</ul>
				</div>
				<Image
					src={fisherman}
					alt="fisherman"
					className="hidden xl:block"
				/>
			</div>
			<button
				className="flex items-center px-6 py-4 text-white align-middle bg-indigo-600 rounded-lg w-fit"
				onClick={scrollToTop}
			>
				Generate Report Now
				<ArrowIcon className="w-6 h-6" />
			</button>
		</section>
	)
}