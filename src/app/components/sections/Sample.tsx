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
				<b className='font-mono'>
					0x3acaa48EAa8A51d10d0417A6Fbd2a41550d04a8c
				</b>
			</h4>
			<Image
				src={placeholder}
				alt='placeholder'
			/>
		</section>
	)
}