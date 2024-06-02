import Image from 'next/image';
import placeholder from '../../../../public/lg-placeholder.png';

export function Sample() {
	return (
		<section className="flex flex-col items-center py-20 px-5 w-full bg-gray">
			<h1 className='my-5 text-center'>
				<b>
					Check out a sample report
				</b>
			</h1>
			<h4 className='my-5 text-nowrap text-center text-base overflow-hidden md:text-2xl text-ellipsis w-10/12'>
				Wallet analyzed: <br />
				<b>
					0x33F9f73C0e01cd5483Fc7Bc0aC23EB670Bf34f2B
				</b>
			</h4>
			<Image
				src={placeholder}
				alt='placeholder'
			/>
		</section>
	)
}