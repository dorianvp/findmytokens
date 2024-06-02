import Image, { StaticImageData } from "next/image";
import sc1 from '../../../../public/sc1.png';
import sc2 from '../../../../public/sc2.png';
import sc3 from '../../../../public/sc3.png';

export function Inclusion() {
	return <section className="flex flex-col items-center p-10 md:p-20">
		<h1 className="my-10 text-center">
			<b>
				What is included on the report
			</b>
		</h1>
		<h3 className="text-dark-gray my-5 text-center">
			Information we attach to each report we generate
		</h3>
		<ul className="w-full">
			<li className="my-8 md:my-16">
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="flex flex-col w-full md:w-1/2 px-5 md:px-10">
						<h3 className="text-center">
							<b>
								List of all Centralized Exchanges Interacted
							</b>
						</h3>
						<p className="text-center my-4">A complete list that includes the names of the centralized exchanges the wallet has interacted with in its lifetime either for sending money to the cold wallet address or receiving from the exchange.</p>
					</div>
					<Image
						src={sc1}
						alt="placeholder"
						className="w-full md:w-1/2 object-contain md:h-96"
					/>

				</div>
			</li>
			<li className="my-8 md:my-16">
				<div className="flex flex-col md:flex-row-reverse justify-center items-center">
					<div className="flex flex-col w-full md:w-1/2 px-10">
						<h3 className="text-center">
							<b>
								Time and Date of the Interaction
							</b>
						</h3>
						<p className="text-center my-4">Every report includes a precise snapshot of the time and date of each interaction in that wallet. Get precise information for reporting or accounting needs.</p>
					</div>
					<Image
						src={sc2}
						alt="placeholder"
						className="w-full md:w-1/2 object-contain md:h-96"
					/>

				</div>
			</li>
			<li className="my-8 md:my-16">
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="flex flex-col w-full md:w-1/2 px-10">
						<h3 className="text-center">
							<b>
								Chain and Wallet address of the interaction
							</b>
						</h3>
						<p className="text-center my-4">Get information about the chain used for the interaction and the wallet address of the exchange that either sent or received tokens to/from your wallet.</p>
					</div>
					<Image
						src={sc3}
						alt="placeholder"
						className="w-full md:w-1/2 object-contain md:h-96"
					/>

				</div>
			</li>

		</ul>
	</section>
}

type ItemProps = {
	title: string;
	text: string;
	image: StaticImageData;
	reversed?: boolean;
}

function Item({ image, title, text, reversed }: ItemProps) {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center">
			{reversed ?
				<Image
					src={image}
					alt="placeholder"
					className="w-full md:w-1/2 object-contain h-96"
				/> : <></>
			}
			<div className="flex flex-col w-full md:w-1/2 px-10">
				<h3>
					<b>
						{title}
					</b>
				</h3>
				<p>{text}</p>
			</div>
			{!reversed ? <Image
				src={image}
				alt="placeholder"
				className="w-full md:w-1/2 object-contain h-96"
			/> : <></>
			}

		</div>
	);
}