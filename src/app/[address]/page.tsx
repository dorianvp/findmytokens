'use client'

import Image from "next/image";
import heroBg from '../../../public/bg.svg';
import { useCallback, useEffect, useState } from "react";
import { getSummary } from "@/actions";
import { WalletSummary } from "@/utils/analysis";
import { useRouter } from "next/navigation";

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
	}, []);

	return (
		<main className="flex h-screen w-screen flex-col items-center justify-center">
			<Image
				src={heroBg}
				alt="background"
				quality={100}
				fill
				sizes="100vw"
				className="object-cover fixed -z-10"
				priority
			/>
			{!params.address ?
				<>
					<h2 className="text-white my-5">
						<b>
							Analyzing...
						</b>
					</h2>
					<h2 className="text-white my-5">
						<b>
							{params.address}
						</b>
					</h2>
					<h3 className="text-white mb-10">(this may take a few minutes)</h3>
				</>
				:
				<h2 className="text-white my-10">
					<b>
						Success
					</b>
				</h2>
			}
			{summary &&
				<button
					className="bg-danger text-white w-fit px-6 py-4 rounded-lg flex align-middle items-center"
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
