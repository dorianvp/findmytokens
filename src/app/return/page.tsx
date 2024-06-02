import Image from "next/image";
import heroBg from '../../../public/bg.png';
import Stripe from "stripe";
import { MyDocument } from "../components/FullReport";
import { PdfRendered } from "../components/PdfRenderer";
import { getSummary, parseAddress } from "@/actions";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function Home({ searchParams }: {
	searchParams: {
		session_id: string
	};
}) {

	console.log(searchParams.session_id);

	const session_id = searchParams.session_id;
	if (!session_id) throw new Error("Missing session id");
	const session = await stripe.checkout.sessions.retrieve(session_id);
	if (session.payment_status == 'paid' && session.metadata) {
		console.log('paid');

		// Fetch transactions
		const data = await parseAddress(session.metadata.wallet)

		data.email = session.customer_details?.email as string;

		const component = <MyDocument reportData={data} />;
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
				<h1 className="text-white m-10">
					<b>
						Report Ready
					</b>
				</h1>
				<PdfRendered pdfComponent={component} />
			</main>
		);
	} else {
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
				<h1 className="text-white">
					<b>
						Invalid session
					</b>
				</h1>
			</main>
		)
	}
}