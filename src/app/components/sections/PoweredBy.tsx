import Image from 'next/image'
import EtherscanLogo from '../../../../public/etherscan-logo.png'
import BscScanLogo from '../../../../public/bsc-logo.svg'
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
				alt='etherscan logo'
				className='py-5 h-20 w-auto'
				style={{ objectFit: 'cover' }}
			/>
			<Image
				src={BscScanLogo}
				alt='bsc logo'
				className='py-5 w-20'
			/>
			<Image
				src={PolygonLogo}
				alt='polygon logo'
				className='py-5 w-20'
			/>
		</div>
	</section>
}