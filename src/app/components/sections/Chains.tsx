'use client'

import Image from "next/image";
import fisherman from '../../../../public/fisherman.svg';
import { ArrowIcon } from "../icons/arrow";
import tickIcon from '../../../../public/tick.svg';
import { scrollToTop } from "@/utils/browser";

export function Chains() {
	return (
		<section className="flex flex-col justify-center items-center w-screen py-20">
			<div className="flex justify-between w-full py-20">
				<div className="flex flex-col px-32">
					<h2 className="text-center my-5">Works with all major EVM Chains</h2>
					<ul className="h-full flex flex-col justify-evenly">
						<li><h4 className="inline-flex">
							<Image
								src={tickIcon}
								alt="tick"
								className="mr-2"
							/>
							Ethereum
						</h4></li>
						<li>
							<h4 className="inline-flex">
								<Image
									src={tickIcon}
									alt="tick"
									className="mr-2"
								/>
								Polygon
							</h4>
						</li>
						<li>
							<h4 className="inline-flex">
								<Image
									src={tickIcon}
									alt="tick"
									className="mr-2"
								/>
								Binance Smart Chain
							</h4>
						</li>
						<li>
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
				/>
			</div>
			<button
				className="bg-indigo-600 text-white w-fit px-6 py-4 rounded-lg flex align-middle items-center"
				onClick={scrollToTop}
			>
				Generate Report Now
				<ArrowIcon className="w-6 h-6" />
			</button>
		</section>
	)
}