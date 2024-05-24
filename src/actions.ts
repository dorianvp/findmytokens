import { redirect } from 'next/dist/server/api-utils';
import { analyzeNormalTransActions } from './utils/analysis';
import { requestAction } from "./utils/etherscan";

// @ts-ignore
import data from '../db-data/csx-address-data.csv'

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
	// redirect(`${formData.get('address')}`);
	return result
}