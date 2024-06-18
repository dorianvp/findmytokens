import Image from 'next/image';
import pfp from '../../../../public/pfp.svg';
import { HTMLAttributes } from 'react';

export function CaseStudies() {
	return (
		<section className="flex flex-col justify-center items-center p-10">
			<h2 className="my-5 text-center">
				<b>
					How has FindMyTokens helped
				</b>
			</h2>
			<h3 className='my-5 text-center'>
				Explore the use cases and gains users have taken
				using FindMyTokens
			</h3>
			<section className='flex flex-col justify-center items-center md:flex-row'>
				<UseCase
					name='Brad'
					role='Found Tokens On A Forgotten Exchange Account'
					text="I have been in crypto for a long time, and remember opening accounts on many different exchanges. However, I have forgotten which ones exactly, and by using FindMyTokens I was able to get the names of exchanges I have interacted with my main wallet, and access them to find unclaimed balances."
					className='mb-10 md:mr-10'
				/>
				<UseCase
					name='Matt'
					role='Recovered Hacked Wallet Assets'
					text="I was able to scan the wallet that stole my assets and after finding out that it recently made a transaction to a centralized exchange I was able to report it, and after submitting proof I ended up recovering my tokens. I couldn't be more thankful!"
					className='mb-10 md:mr-10'
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
		<article className={`flex flex-col p-10 border-2 rounded-3xl border-gray basis-0 grow self-stretch justify-start ${props.className}`}>
			<header className="flex justify-center items-center mb-5">
				<div className='flex flex-col'>
					<h4 className='text-center'>
						<b>
							{props.name}
						</b>
					</h4>
					<h4 className='text-center text-dark-gray'>{props.role}</h4>
				</div>
			</header>
			<p className='text-center'>{props.text}</p>
		</article>
	)
}