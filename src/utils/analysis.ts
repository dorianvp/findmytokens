export function analyzeNormalTransActions(txList: any[], db: any) {

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