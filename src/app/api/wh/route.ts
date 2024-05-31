import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY as string);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const config = {
	api: {
		bodyParser: false,
	},
};

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: Request) {
	const buf = await req.text()
	const sig = req.headers.get('stripe-signature') as string;

	let event;

	try {
		event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
	} catch (err) {
		console.log(`⚠️ Webhook signature verification failed.`, err);
		return Response.error();
	}

	console.log(event.type);

	if (event.type === 'checkout.session.completed') {
		const session = event.data.object;
		const r = await resend.emails.send({
			from: 'support@findmytokens.com',
			to: 'delivered@resend.dev',
			subject: 'Hello World',
			html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
		});
		console.log('MAIL:', r);


	}

	return Response.json({ received: true });
};
