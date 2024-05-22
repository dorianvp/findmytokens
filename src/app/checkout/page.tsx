'use client'

import { loadStripe } from '@stripe/stripe-js';
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useCallback } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function Checkout() {
	const fetchClientSecret = useCallback(() => {
		// Create a Checkout Session
		return fetch("/api/checkout", {
			method: "POST",
		})
			.then((res) => res.json())
			.then((data) => data.clientSecret);
	}, []);

	const options = { fetchClientSecret };
	return (
		<main className="flex h-screen w-screen flex-col items-center justify-center">
			<div id="checkout" className='w-full h-full'>
				<EmbeddedCheckoutProvider
					stripe={stripePromise}
					options={options}
				>
					<EmbeddedCheckout className='w-screen h-screen flex justify-center items-center' />
				</EmbeddedCheckoutProvider>
			</div>
		</main>
	);
}
