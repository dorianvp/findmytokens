import { csv } from 'd3-fetch'

export async function extractCSV(data: string) {
	let db: any[] = [];

	const result = await csv(data)
	result.forEach(data => {
		db.push({ exchangeAddress: data.exchangeAddress, exchangeName: data.exchangeName })
	});
	return db;
}
