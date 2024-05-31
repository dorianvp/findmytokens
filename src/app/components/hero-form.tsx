'use client'

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export function HeroForm() {
	const router = useRouter();
	const [address, setAddress] = useState<string>('')
	return (
		<form
			className="flex flex-col p-5 mt-2 w-full bg-white rounded-xl md:mt-10 lg:mt-20 lg:flex-row"
			onSubmit={(e: FormEvent) => {
				e.preventDefault();
				if (address) {
					if (address == '0xa322BAfebb305bf55EAD5E03Fd6372c2574df6a3') // delete later
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
