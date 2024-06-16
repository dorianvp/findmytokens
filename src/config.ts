import { http, createConfig } from 'wagmi'
import { mainnet, bsc, arbitrum } from 'wagmi/chains'

export const config = createConfig({
	chains: [mainnet, bsc, arbitrum],
	transports: {
		[mainnet.id]: http("https://eth-mainnet.g.alchemy.com/v2/h7NRrWwT641myxttbQgAdzfQxoulxefU"),
		[bsc.id]: http(),
		[arbitrum.id]: http(),
	},
})