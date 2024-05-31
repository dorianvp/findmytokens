import { NextRequest } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function GET(req: NextRequest) {
	const session_id = req.nextUrl.searchParams.get('session_id');
	try {
		if (!session_id) throw new Error("Missing session id");
		const session = await stripe.checkout.sessions.retrieve(session_id);
		if (session.payment_status == 'paid') {
			return Response.json({ paid: true })
		}
		return Response.json({ paid: false })
	} catch (err) {
		return Response.error()
	}
};