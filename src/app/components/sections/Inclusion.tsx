import Image, { StaticImageData } from "next/image";
import placeholder from '../../../../public/placeholder.png'

export function Inclusion() {
	return <section className="flex flex-col items-center">
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
					text="SAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLE"
					image={placeholder}
				/>
			</li>
			<li className="my-16">
				<Item
					title="Time and Date of the Interaction"
					text="SAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLE"
					image={placeholder}
				/>
			</li>
			<li className="my-16">
				<Item
					title="Chain and Wallet address of the interaction"
					text="SAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLE"
					image={placeholder}
				/>
			</li>
		</ul>
	</section>
}

type ItemProps = {
	title: string;
	text: string;
	image: StaticImageData;
}

function Item({ image, title, text }: ItemProps) {
	return (
		<div className="flex">
			<div className="flex flex-col w-1/2">
				<h3>
					{title}
				</h3>
				<p>{text}</p>
			</div>
			<Image
				src={image}
				alt="placeholder"
				className="w-1/2"
			/>

		</div>
	);
}