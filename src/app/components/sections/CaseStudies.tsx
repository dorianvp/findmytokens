import Image from 'next/image';
import pfp from '../../../../public/pfp.svg';
import { HTMLAttributes } from 'react';

export function CaseStudies() {
	return (
		<section className="p-10 flex flex-col items-center justify-center">
			<h1 className="my-5">
				How has FindMyTokens helped
			</h1>
			<h3 className='my-5'>
				Explore the use cases and gains users have taken
				using FindMyTokens
			</h3>
			<section className='flex justify-evenly items-center'>
				<UseCase
					name='Matt Cannon'
					role='Head of Marketing'
					text='“Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraol quis pharetra arcu pharetra blandit.”'
					className='mr-10'
				/>
				<UseCase
					name='Matt Cannon'
					role='Head of Marketing'
					text='“Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraol quis pharetra arcu pharetra blandit.”'
					className='mr-10'
				/>
				<UseCase
					name='Matt Cannon'
					role='Head of Marketing'
					text='“Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraol quis pharetra arcu pharetra blandit.”'
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
		<article className={`flex flex-col p-5 border-2 rounded-xl border-gray ${props.className}`}>
			<header className="flex">
				<Image
					src={pfp}
					alt='pfp'
				/>
				<div className='flex flex-col'>
					<h2>
						<b>
							{props.name}
						</b>
					</h2>
					<h4>{props.role}</h4>
				</div>
			</header>
			<p>{props.text}</p>
		</article>
	)
}