'use client'

import { resolveInput } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendGAEvent } from "@next/third-parties/google";
import { useState } from "react";

export function HeroForm() {
	const [address, setAddress] = useState('')
	return (
		<form
			className="flex flex-col items-center p-5 mt-2 w-full bg-white rounded-xl md:mt-6 lg:mt-10 lg:flex-row"
			action={resolveInput}
		>
			<Input
				type="text"
				placeholder="Enter an address or ENS name"
				name="address"
				className="flex-grow w-full bg-white rounded-2xl border border-gray lg:mx-2 lg:w-max"
				onChange={(e) => setAddress(e.target.value)}
			/>
			<Button
				type="submit"
				className="mt-5 w-full rounded-full lg:mt-0 lg:w-fit"
				variant={"destructive"}
				onClick={() => {
					sendGAEvent('event', 'click_preview', { value: address })
				}}
			>
				Generate Report
			</Button>
		</form>
	)
}
