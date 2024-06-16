import { http, createConfig } from 'wagmi'
import { mainnet, bsc, arbitrum } from 'wagmi/chains'

export const config = createConfig({
	chains: [mainnet, bsc, arbitrum],
	transports: {
		[mainnet.id]: http(),
		[bsc.id]: http(),
		[arbitrum.id]: http(),
	},
})