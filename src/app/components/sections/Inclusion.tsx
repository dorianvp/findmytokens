import Image, { StaticImageData } from "next/image";
import sc1 from '../../../../public/sc1.png';
import sc2 from '../../../../public/sc2.png';
import sc3 from '../../../../public/sc3.png';

export function Inclusion() {
	return <section className="flex flex-col items-center p-10 md:p-20">
		<h2 className="my-10 text-center">
			<b>
				What is included on the report
			</b>
		</h2>
		<h3 className="text-dark-gray my-5 text-center">
			Information we attach to each report we generate
		</h3>
		<ul className="w-full">
			<li className="my-8 md:my-16">
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="flex flex-col w-full md:w-1/2 px-5 md:px-10">
						<h3 className="text-center">
							<b>
								List of all Centralized Exchanges Interacted:
							</b>
						</h3>
						<p className="text-center my-4">
							A comprehensive list containing the names of centralized exchanges with which the wallet has interacted over its lifetime through sending or receiving transactions.
						</p>
					</div>
					<Image
						src={sc1}
						alt="placeholder"
						quality={75}
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
						<p className="text-center my-4">
							Each report provides an exact timestamp of every interaction within the wallet, ensuring precise information for filing reports.
						</p>
					</div>
					<Image
						src={sc2}
						alt="placeholder"
						quality={75}
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
						<p className="text-center my-4">
							Access details about the blockchain utilized for the interaction and the wallet address of the exchange involved in either sending or receiving tokens to/from your wallet.
						</p>
					</div>
					<Image
						src={sc3}
						alt="placeholder"
						quality={75}
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