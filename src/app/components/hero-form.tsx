'use client'

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { sendGAEvent } from '@next/third-parties/google'

export function HeroForm() {
	const router = useRouter();
	const [address, setAddress] = useState<string>('')
	return (
		<form
			className="flex flex-col p-5 mt-2 w-full bg-white rounded-xl md:mt-6 lg:mt-10 lg:flex-row"
			onSubmit={(e: FormEvent) => {
				e.preventDefault();
				if (address) {
					sendGAEvent({ event: 'scanAddress', value: address })
					router.push(`/${address}`)
				}
			}}
		>
			<input
				type="text"
				placeholder="Address"
				name="address"
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					setAddress(e.target.value)
				}}
				className="flex-grow px-2 py-4 w-full bg-white rounded-2xl border border-gray lg:mx-2 lg:w-max"
			/>
			<button
				type="submit"
				className="px-5 py-4 mt-5 w-full text-white bg-red-500 rounded-full lg:mt-0 lg:w-fit"
			>
				Generate Report
			</button>
		</form>
	)
}
