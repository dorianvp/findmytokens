import Image from 'next/image'
import EtherscanLogo from '../../../../public/etherscan-logo.png'
import BscScanLogo from '../../../../public/bsc-logo.png'
import PolygonLogo from '../../../../public/polygon-logo.png'

export function PoweredBy() {
	return <section className="w-screen p-5 flex flex-col items-center">
		<h3
			className="text-center"
		>Powered By Giants</h3>
		<div
			className="px-10 lg:px-60 flex flex-col lg:flex-row w-full justify-between items-center"
		>
			<Image
				src={EtherscanLogo}
				alt='ehterscan logo'
			/>
			<Image
				src={BscScanLogo}
				alt='ehterscan logo'
			/>
			<Image
				src={PolygonLogo}
				alt='ehterscan logo'
			/>
		</div>
	</section>
}