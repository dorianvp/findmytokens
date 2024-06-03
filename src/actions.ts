'use server'

import { analyzeNormalTransActions, getExchangesInteracted, parseData } from './utils/analysis';
import { requestArbiscanAction, requestBscscanAction, requestEtherscanAction } from "./utils/etherscan";
// @ts-ignore
import ethData from './app/db-data/eth.csv'
// @ts-ignore
import bscData from './app/db-data/bsc.csv'
// @ts-ignore
import arbData from './app/db-data/arb.csv'

export type FullReport = {
	wallet: string;
	ethereum?: any[];
	bsc?: any[];
	arbitrum?: any[];
	interactions: number;
	email: string;
	txAnalyzed: number;
	matches: number;
	id?: string;
}


export async function parseAddress(address: string): Promise<FullReport> {
	let fullDB: FullReport = {
		wallet: address,
		ethereum: [],
		bsc: [],
		arbitrum: [],
		interactions: 0,
		txAnalyzed: 0,
		matches: 0,
		email: ''
	}
	fullDB.wallet = address;

	let preEth: any[] = [];
	let preBsc: any[] = [];
	let preArb: any[] = [];

	let ethDB: any[] = [];
	let bscDB: any[] = [];
	let arbDB: any[] = [];

	ethData.forEach((i: any) => {
		preEth.push({ exchangeAddress: i.exchangeAddress, exchangeName: i.exchangeName })
	});
	bscData.forEach((i: any) => {
		preBsc.push({ exchangeAddress: i.exchangeAddress, exchangeName: i.exchangeName })
	});
	arbData.forEach((i: any) => {
		preArb.push({ exchangeAddress: i.exchangeAddress, exchangeName: i.exchangeName })
	});

	preEth.forEach((obj: any) => {
		// @ts-ignore
		ethDB[obj[Object.keys(obj)[0]]] = obj[Object.keys(obj)[1]]
	});
	preBsc.forEach((obj: any) => {
		// @ts-ignore
		bscDB[obj[Object.keys(obj)[0]]] = obj[Object.keys(obj)[1]]
	});
	preArb.forEach((obj: any) => {
		// @ts-ignore
		arbDB[obj[Object.keys(obj)[0]]] = obj[Object.keys(obj)[1]]
	});

	let requestData = await requestEtherscanAction('get_account_transactions', address);
	let result = analyzeNormalTransActions(requestData.result, ethDB)
	fullDB.txAnalyzed += preEth.length;
	fullDB.matches += result.length;
	fullDB.ethereum = result;

	requestData = await requestBscscanAction('get_account_transactions', address);

	result = analyzeNormalTransActions(requestData.result, bscDB)
	fullDB.txAnalyzed += preBsc.length;
	fullDB.matches += result.length;
	fullDB.bsc = result;

	requestData = await requestArbiscanAction('get_account_transactions', address);
	result = analyzeNormalTransActions(requestData.result, arbDB)
	fullDB.txAnalyzed += preArb.length;
	fullDB.matches += result.length;
	fullDB.arbitrum = result;

	return fullDB;
}

export async function getSummary(address: string) {
	const etherscanData = await requestEtherscanAction('get_account_transactions', address);
	// const bscData = await requestBscscanAction('get_account_transactions', address)

	let pre: any[] = [];

	ethData.forEach((i: any) => {
		pre.push({ exchangeAddress: i.exchangeAddress, exchangeName: i.exchangeName })
	});

	let db = {}

	pre.forEach((obj: any) => {
		// @ts-ignore
		db[obj[Object.keys(obj)[0]]] = obj[Object.keys(obj)[1]]
	});

	const result = analyzeNormalTransActions(etherscanData.result, db)
	// redirect(`${formData.get('address')}`);
	const r = getExchangesInteracted(result);
	// console.log('RESPONSE', r);

	return r;
}