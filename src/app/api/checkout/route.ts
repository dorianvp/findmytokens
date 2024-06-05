import { NextRequest } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const PRICE_ID = process.env.STRIPE_PRODUCT_ID as string;

export async function POST(req: NextRequest) {
	try {
		const { address: address } = await req.json();

		// Create Checkout Sessions from body params.
		const session = await stripe.checkout.sessions.create({
			ui_mode: 'embedded',
			line_items: [
				{
					// Provide the exact Price ID (for example, pr_1234) of
					// the product you want to sell
					price: PRICE_ID,
					quantity: 1,
				},
			],
			metadata: {
				wallet: address
			},
			mode: 'payment',
			return_url:
				`${req.nextUrl.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
		});

		return Response.json({ clientSecret: session.client_secret });
	} catch (err) {
		console.log(err);
		return Response.error()
	}
}


export async function GET(req: NextRequest, res: Response) {
	try {
		const id = req.nextUrl.searchParams.get('session_id') as string;
		const session =
			await stripe.checkout.sessions.retrieve(id);

		return Response.json({
			status: session.status,
			customer_email: session.customer_details?.email
		});
	} catch (err) {
		return Response.error();
	}
}