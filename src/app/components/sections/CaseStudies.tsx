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
					role='Clicked on a Fake Airdrop Link and Got Drained'
					text="I've been in crypto for years, but I fell victim to a scam after clicking on a fake airdrop link. I lost all the tokens from my wallet and felt hopeless. Tried the hacker wallet on FindMyTokens and discovered multiple transactions to centralized exchanges. Armed with this proof, I reported the incident to the exchange, they froze the account and after a legal review, I recovered my drained tokens."
					className='mb-10 md:mr-10'
				/>
				<UseCase
					name='Matt'
					role='Interacted with a Fake NFT and Lost Tokens'
					text="I made a costly mistake by interacting with a fake NFT that drained my wallet. Desperate to recover my tokens, I used FindMyTokens to trace the transactions to a centralized exchange. With the detailed report from FindMyTokens, I submitted evidence and successfully reclaimed my lost tokens."
					className='mb-10 md:mr-10'
				/>
				<UseCase
					name='Sofia'
					role='Accidentally Exposed Private Keys'
					text="In a moment of oversight, I accidentally exposed my private keys, leading to unauthorized transactions and the loss of my entire wallet. FindMyTokens allowed me to see that the attacker had previously sent tokens to a couple of exchanges where he performed a KYC procedure. Together with my lawyers we were able to discover the attacker's identity and reported it to the authorities."
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