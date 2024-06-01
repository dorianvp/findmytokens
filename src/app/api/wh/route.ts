import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from 'resend';
import { EmailReportTemplate } from "@/components/mail/report-template";
import { parseAddress } from "@/actions";
import { MyDocument } from "@/app/components/FullReport";
import { pdf, renderToBuffer } from "@react-pdf/renderer";

const resend = new Resend(process.env.RESEND_KEY as string);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

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
	if (event.type === 'checkout.session.completed') {
		const session = event.data.object;
		let data = await parseAddress(session.metadata?.wallet as string);
		data.email = session.customer_email as string;

		const component = MyDocument({ reportData: data })
		const r = await resend.emails.send({
			from: 'support@findmytokens.com',
			to: `${session.customer_email}`,
			subject: `Here is your report for wallet ${session.metadata?.wallet}`,
			react: EmailReportTemplate({ wallet: session.metadata?.wallet as string }),
			attachments: [{
				filename: `Report${session.metadata?.wallet}.pdf`,
				content: await renderToBuffer(component)
			}]
		});
		console.log('MAIL:', r);
	}

	return Response.json({ received: true });
};
