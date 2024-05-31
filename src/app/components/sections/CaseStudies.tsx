import Image from 'next/image';
import pfp from '../../../../public/pfp.svg';
import { HTMLAttributes } from 'react';

export function CaseStudies() {
	return (
		<section className="p-10 flex flex-col items-center justify-center">
			<h1 className="my-5">
				<b>
					How has FindMyTokens helped
				</b>
			</h1>
			<h3 className='my-5'>
				Explore the use cases and gains users have taken
				using FindMyTokens
			</h3>
			<section className='flex justify-evenly items-center'>
				<UseCase
					name='Matt'
					role='Recovered Hacked Wallet Assets'
					text="I was able to scan the wallet that stole my assets and after finding out that it recently made a transaction to a centralized exchange I was able to report it, and after submitting proof I ended up recovering my tokens. I couldn't be more thankful!"
					className='mr-10'
				/>
				<UseCase
					name='Brad'
					role='Found Tokens On A Forgotten Exchange Account'
					text="I have been in crypto for a long time, and remember opening accounts on many different exchanges. However, I have forgotten which ones exactly, and by using FindMyTokens I was able to get the names of exchanges I have interacted with my main wallet, and access them to find unclaimed balances."
					className='mr-10'
				/>
				<UseCase
					name='Sofia'
					role='Completed My Record-Keeping'
					text="After sending hundreds of transactions throughout the years I was struggling to make sense of them, with FindMyTokens I was able to improve my recordkeeping by generating a list of all the exchanges I have either sent or received tokens from in the past."
				/>
			</section>
		</section>
	)
}

type UseCaseProps = {
	name: string;
	role: string;
	text: string;
} & HTMLAttributes<HTMLDivElement>

function UseCase(props: UseCaseProps) {
	return (
		<article className={`flex flex-col p-10 border-2 rounded-3xl border-gray items-stretch ${props.className}`}>
			<header className="flex justify-start items-center mb-5">
				<Image
					src={pfp}
					alt='pfp'
					className='w-10 h-10 mr-5'
				/>
				<div className='flex flex-col'>
					<h4>
						<b>
							{props.name}
						</b>
					</h4>
					<h4 className='text-dark-gray'>{props.role}</h4>
				</div>
			</header>
			<p>{props.text}</p>
		</article>
	)
}