export type WalletSummary = {
	interactions: number;
	chains?: number;
	dates?: string[];
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

export function getExchangesInteracted(data: any[]): WalletSummary {
	const exchanges: number[] = []
	data.forEach(t => {
		if (!exchanges.includes(t.cxName)) {
			exchanges.push(t);
		}
	});
	return {
		interactions: exchanges.length
	}
}