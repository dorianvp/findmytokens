import Image from 'next/image';
import placeholder from '../../../../public/lg-placeholder.png';

export function Sample() {
	return (
		<section className="flex flex-col py-20 bg-gray w-full items-center">
			<h1 className='my-5'>
				<b>
					Check out a sample report
				</b>
			</h1>
			<h3 className='my-5'>
				Wallet analyzed:
				<b>
					0x33F9f73C0e01cd5483Fc7Bc0aC23EB670Bf34f2B
				</b>
			</h3>
			<Image
				src={placeholder}
				alt='placeholder'
			/>
		</section>
	)
}