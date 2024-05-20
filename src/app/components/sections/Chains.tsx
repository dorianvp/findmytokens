import Image from "next/image";
import fisherman from '../../../../public/fisherman.svg';
import { ArrowIcon } from "../icons/arrow";

export function Chains() {
	return (
		<section className="flex flex-col justify-center items-center w-screen py-20">
			<div className="flex justify-between w-full py-20">
				<div className="flex flex-col px-32">
					<h2 className="text-center">Works with all major EVM Chains</h2>
					<ul>
						<li><h4>✔️ Ethereum</h4></li>
						<li>
							<h4>
								✔️ Polygon
							</h4>
						</li>
						<li>
							<h4>
								✔️ Binance Smart Chain
							</h4>
						</li>
						<li>
							<h4>
								✔️ Arbitrum
							</h4>
						</li>
						<li>
							<h4>
								✔️ Avalanche
							</h4>
						</li>
					</ul>
				</div>
				<Image
					src={fisherman}
					alt="fisherman"
				/>
			</div>
			<button
				className="bg-indigo-600 text-white w-fit px-6 py-4 rounded-lg flex align-middle items-center">
				Generate Report Now
				<ArrowIcon className="w-6 h-6" />
			</button>
		</section>
	)
}