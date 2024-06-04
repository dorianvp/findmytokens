import { FullReport } from "@/actions";

export type WalletSummary = {
	interactions: number;
	txs: number;
	chains?: string[];
	firstDate?: string;
	lastDate?: string;
}

export function analyzeNormalTransActions(txList: any[], db: any) {
	// console.log(txList);

	const results = Array();
	for (let tx of txList) {
		if (db[tx.to]) {
			results.push({
				cxName: db[tx.to],
				timestamp: tx.timeStamp,
				to: tx.to,
				direction: 'to'
			})
		}
		if (db[tx.from]) {
			results.push({
				cxName: db[tx.from],
				timestamp: tx.timeStamp,
				from: tx.from,
				direction: 'from'
			})
		}
	}
	return results;
}

export function parseData(data: any[]) {
	return data.map(data => (
		[data.cxName, data.direction === 'to' ? String(`Your wallet sent tokens to ${data.cxName} on ${new Date(Number(data.timestamp) * 1000)}`) :
			String(`Your wallet received tokens from ${data.cxName} on ${new Date(Number(data.timestamp))}`)]
	))
}
;
export function getExchangesInteracted(data: FullReport) {
	const count = data.ethereum?.length + data.bsc.length + data.arbitrum?.length;

	return count;
}

export function getChains(data: FullReport) {
	const chains = [];
	if (data.ethereum.length > 0) {
		chains.push('Ethereum')
	}
	if (data.bsc.length > 0) {
		chains.push('Binance Smart Chain')
	}
	if (data.arbitrum.length > 0) {
		chains.push('Arbitrum')
	}
	return chains;
}

export function getFirstDate(data: FullReport) {
	const firstDates = [];
	if (data.ethereum) firstDates.push(data.ethereum[0]);
	if (data.bsc) firstDates.push(data.bsc[0]);
	if (data.arbitrum) firstDates.push(data.arbitrum[0]);
	firstDates.sort((a: { timestamp: string }, b: { timestamp: string }) => {
		if (a.timestamp < b.timestamp) {
			return -1;
		}
		return 1;
	})
	return firstDates[0];
}

export function getLastDate(data: FullReport) {
	const lastDates = [];
	if (data.ethereum) lastDates.push(data.ethereum[data.ethereum.length - 1]);
	if (data.bsc) lastDates.push(data.bsc[data.bsc.length - 1]);
	if (data.arbitrum) lastDates.push(data.arbitrum[data.arbitrum.length - 1]);
	lastDates.sort((a: { timestamp: string }, b: { timestamp: string }) => {
		if (a.timestamp < b.timestamp) {
			return -1;
		}
		return 1;
	})
	return lastDates[0];
}