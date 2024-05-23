import { analyzeNormalTransActions } from "@/utils/analysis";
import { extractCSV } from "@/utils/csv";
import { requestAction } from "@/utils/etherscan";

// @ts-ignore
import data from '../db-data/csx-address-data.csv'
import { redirect } from "next/navigation";

export function HeroForm() {

	async function parseAddress(formData: FormData) {
		'use server'

		let requestData = await requestAction('get_account_transactions', formData.get('address'));

		// let data = await extractCSV(csvFile)

		let pre: any[] = [];

		data.forEach((i: any) => {
			pre.push({ exchangeAddress: i.exchangeAddress, exchangeName: i.exchangeName })
		});

		let db = {}

		pre.forEach((obj: any) => {
			// @ts-ignore
			db[obj[Object.keys(obj)[0]]] = obj[Object.keys(obj)[1]]
		});

		const result = analyzeNormalTransActions(requestData.result, db)
		redirect(`${formData.get('address')}`);
		return result
	}

	return (
		<form
			className="flex flex-col p-5 mt-2 w-full bg-white rounded-xl md:mt-10 lg:mt-20 lg:flex-row"
			action={parseAddress}
		>
			<input
				type="text"
				placeholder="Address"
				name="address"
				className="flex-grow px-2 py-4 w-full bg-white rounded-2xl border border-gray-300 border-solid lg:mx-2 lg:w-max"
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
