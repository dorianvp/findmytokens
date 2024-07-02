import axios from 'axios';
const etherscanKey = process.env.ETHERSCAN_KEY as string;
const bscscanKey = process.env.BSCSCAN_KEY as string;
const arbiscanKey = process.env.POLYGONSCAN_KEY as string;
const etherBaseUrl = "https://api.etherscan.io/api"
const bscBaseUrl = "https://api.bscscan.com/api"
const arbitrumBaseUrl = "https://api.arbiscan.io/api"

export async function requestEtherscanAction(type: 'get_account_transactions' | any, payload: any): Promise<any> {
	let res;
	switch (type) {
		case 'get_account_transactions':
			let url = `?module=account&action=txlist&address=${payload}&startblock=0&endblock=99999999&sort=asc&apikey=${etherscanKey}`;
			try {
				let counter = 0;
				res = await axios.get(etherBaseUrl + url);
				while (res.status !== 200) {
					if (counter > 9 && res.status !== 200) {
						throw new Error("something went wrong with fetching user transactions");
					}
					res = await requestEtherscanAction('get_account_transactions', res.data.ethAddress);
					counter++;
				}
				return res.data;
			} catch (e) {
				return e;
			}
		default:
			try {
				res = await axios.get(payload);
			} catch (e) {
				res = e;
			}
			return res;
	}
}

export async function requestBscscanAction(type: 'get_account_transactions' | any, payload: any): Promise<any> {
	let res;
	switch (type) {
		case 'get_account_transactions':
			let url = `?module=account&action=txlist&address=${payload}&startblock=0&endblock=99999999&sort=asc&apikey=${bscscanKey}`;
			try {
				let counter = 0;
				res = await axios.get(bscBaseUrl + url);
				while (res.status !== 200) {
					if (counter > 9 && res.status !== 200) {
						throw new Error("something went wrong with fetching user transactions");
					}
					res = await requestBscscanAction('get_account_transactions', res.data.ethAddress);
					counter++;
				}
				return res.data;
			} catch (e) {
				return e;
			}
		default:
			try {
				res = await axios.get(payload);
			} catch (e) {
				res = e;
			}
			return res;
	}
}

export async function requestArbiscanAction(type: 'get_account_transactions' | any, payload: any): Promise<any> {
	let res;
	switch (type) {
		case 'get_account_transactions':
			let url = `?module=account&action=txlist&address=${payload}&startblock=0&endblock=99999999&sort=asc&apikey=${arbiscanKey}`;
			try {
				let counter = 0;
				res = await axios.get(arbitrumBaseUrl + url);
				while (res.status !== 200) {
					if (counter > 9 && res.status !== 200) {
						throw new Error("something went wrong with fetching user transactions");
					}
					res = await requestArbiscanAction('get_account_transactions', res.data.ethAddress);
					counter++;
				}
				return res.data;
			} catch (e) {
				return e;
			}
		default:
			try {
				res = await axios.get(payload);
			} catch (e) {
				res = e;
			}
			return res;
	}
}

// https://api.etherscan.io/api?module=account&actions=txlist&address=0xa322BAfebb305bf55EAD5E03Fd6372c2574df6a3&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken