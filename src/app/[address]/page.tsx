'use client'

import Image from "next/image";
import heroBg from '../../../public/bg.png';
import tickIcon from '../../../public/tick.svg';
import { useCallback, useEffect, useState } from "react";
import { getSummary } from "@/actions";
import { WalletSummary } from "@/utils/analysis";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

export default function Address({ params }: { params: { address: string } }) {
	const router = useRouter();
	const [summary, setSummary] = useState<WalletSummary>();
	const summarize = useCallback(() => {
		getSummary(params.address).then(r => {
			setSummary(r)
		})
	}, [params])

	useEffect(() => {
		summarize();
		sendGAEvent({ event: 'scanAddress', value: params.address })
	}, []);

	return (
		<main className="flex min-h-screen flex-col items-center justify-center overflow-hidden relative">
			<Image
				src={heroBg}
				alt="background"
				priority
				quality={90}
				sizes="100svh"
				fill
				className="object-cover fixed -z-10"
			/>
			{!summary || !params.address ?
				<>
					<h2 className="text-white my-5 text-center">
						<b>
							Analyzing
						</b>
					</h2>
					<p className="text-white my-5 text-ellipsis text-base">
						<b>
							{params.address}
						</b>
					</p>
					<p className="text-white mb-10">(this may take a few minutes)</p>
				</>
				:
				summary.interactions > 0 ?
					<div className="flex flex-col">
						<h2 className="text-white my-10 text-center">
							<b>
								Success
							</b>
						</h2>
						<p className="text-white inline-flex">
							<Image
								src={tickIcon}
								alt="tick"
								className="mr-2"
							/> Analyzed {summary?.txs} transactions
						</p>
						<p className="text-white inline-flex">
							<Image
								src={tickIcon}
								alt="tick"
								className="mr-2"
							/>
							Found interactions in: <br />
						</p>
						<ul className="flex flex-col justify-evenly items-center h-full xl:items-start pl-10">
							{summary.chains?.map((chain, i) => {
								return <li key={i}>
									<p className="inline-flex text-white">
										{chain}
									</p>
								</li>
							})}
						</ul>
						<p className="text-white inline-flex">
							<Image
								src={tickIcon}
								alt="tick"
								className="mr-2"
							/>
							Interacted with {summary?.interactions} exchanges
						</p>
						<p className="text-white inline-flex">
							<Image
								src={tickIcon}
								alt="tick"
								className="mr-2"
							/>
							First interaction done at {summary?.firstDate}
						</p>
						<p className="text-white inline-flex">
							<Image
								src={tickIcon}
								alt="tick"
								className="mr-2"
							/>
							Last interaction done at {summary?.lastDate}
						</p>
					</div>
					:
					<div className="flex flex-col">
						<h3 className="text-white my-10 text-center">
							<b>
								Sorry, the wallet has not sent or recived tokens from an exchange. You can check at a later time in the future or <Link href={'mailto:support@findmytokens.com'} className="font-sans underline">message us</Link> for additional analysis.
							</b>
						</h3>
					</div>
			}
			{summary && summary.interactions > 0 &&
				<button
					className="bg-danger text-white w-fit px-6 py-4 my-5 rounded-lg flex align-middle items-center"
					onClick={() => {
						router.push(`/checkout/${params.address}`)
					}}
				>
					Download Report
				</button>
			}
		</main>
	);
}
