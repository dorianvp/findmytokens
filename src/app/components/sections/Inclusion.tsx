import Image, { StaticImageData } from "next/image";
import sc1 from '../../../../public/sc1.png';
import sc2 from '../../../../public/sc2.png';
import sc3 from '../../../../public/sc3.png';

export function Inclusion() {
	return <section className="flex flex-col items-center p-20">
		<h1 className="my-10">
			<b>
				What is included on the report
			</b>
		</h1>
		<h3 className="text-dark-gray my-5">
			Information we attach to each report we generate
		</h3>
		<ul className="w-full">
			<li className="my-16">
				<Item
					title="List of all Centralized Exchanges Interacted"
					text="A complete list that includes the names of the centralized exchanges the wallet has interacted with in its lifetime either for sending money to the cold wallet address or receiving from the exchange."
					image={sc1}
				/>
			</li>
			<li className="my-16">
				<Item
					title="Time and Date of the Interaction"
					text="Every report includes a precise snapshot of the time and date of each interaction in that wallet. Get precise information for reporting or accounting needs."
					image={sc2}
					reversed
				/>
			</li>
			<li className="my-16">
				<Item
					title="Chain and Wallet address of the interaction"
					text="Get information about the chain used for the interaction and the wallet address of the exchange that either sent or received tokens to/from your wallet."
					image={sc3}
				/>
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
		<div className="flex justify-center items-center">
			{reversed ?
				<Image
					src={image}
					alt="placeholder"
					className="w-1/2 object-contain h-96"
				/> : <></>
			}
			<div className="flex flex-col w-1/2 p-2">
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
				className="w-1/2 object-contain h-96"
			/> : <></>
			}

		</div>
	);
}