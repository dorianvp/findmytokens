'use client'

import Image from "next/image";
import fisherman from '../../../../public/fisherman.svg';
import { ArrowIcon } from "../icons/arrow";
import tickIcon from '../../../../public/tick.svg';
import { scrollToTop } from "@/utils/browser";
import { Button } from "@/components/ui/button";

export function Chains() {
	return (
		<section className="flex flex-col justify-center items-center py-20 w-full bg-gray">
			<div className="flex justify-center items-center py-20 w-full">
				<div className="flex flex-col px-5 md:px-32">
					<h2 className="my-5 text-center">
						<b>
							Works with all major EVM Chains
						</b>
					</h2>
					<ul className="flex flex-col justify-evenly items-center h-full xl:items-start">
						<li className="w-1/2">
							<p className="inline-flex">
								<Image
									src={tickIcon}
									alt="tick"
									className="mr-2"
								/>
								Ethereum
							</p>
						</li>
						<li className="w-1/2">
							<p className="inline-flex">
								<Image
									src={tickIcon}
									alt="tick"
									className="mr-2"
								/>
								Binance Smart Chain
							</p>
						</li>
						<li className="w-1/2">
							<p className="inline-flex">
								<Image
									src={tickIcon}
									alt="tick"
									className="mr-2"
								/>
								Arbitrum
							</p>
						</li>
						<li className="w-1/2">
							<p className="inline-flex">
								<Image
									src={tickIcon}
									alt="tick"
									className="mr-2"
								/>
								(More coming soon)
							</p>
						</li>
					</ul>
				</div>
				<Image
					src={fisherman}
					alt="fisherman"
					className="hidden xl:block"
				/>
			</div>
			<Button
				className="flex items-center text-white align-middle rounded-full w-fit"
				onClick={scrollToTop}
			>
				Generate Report Now
				<ArrowIcon className="w-6 h-6" />
			</Button>
		</section>
	)
}