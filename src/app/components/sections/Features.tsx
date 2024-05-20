'use client'

import { useEffect, useRef } from "react"

export function Features() {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const firstRef = useRef<HTMLDivElement>(null)
	const thirdRef = useRef<HTMLDivElement>(null)


	const draw = (ctx: CanvasRenderingContext2D) => {
		const canvas = canvasRef.current as HTMLCanvasElement;
		const div1 = firstRef.current?.getBoundingClientRect() as DOMRect;
		const div2 = thirdRef.current?.getBoundingClientRect() as DOMRect;
		const parentRect = canvasRef.current?.getBoundingClientRect() as DOMRect;

		const x1 = div1.left - parentRect.left + div1.width / 2;
		const y1 = div1.top - parentRect.top + div1.height / 2;
		const x2 = div2.left - parentRect.left + div2.width / 2;
		const y2 = div2.top - parentRect.top + div2.height / 2;

		const scaleX = canvas.width / parentRect.width;
		const scaleY = canvas.height / parentRect.height;
		const transformedX1 = x1 * scaleX;
		const transformedY1 = y1 * scaleY;
		const transformedX2 = x2 * scaleX;
		const transformedY2 = y2 * scaleY;

		ctx.beginPath();
		ctx.setLineDash([15, 5]);
		ctx.moveTo(transformedX1, transformedY1);
		ctx.lineTo(transformedX2, transformedY2);
		ctx.strokeStyle = '#D8D8D8';
		ctx.lineWidth = 2;
		ctx.stroke();

	}

	const updateCanvas = () => {
		const canvas = canvasRef.current as HTMLCanvasElement;
		const ctx = canvas?.getContext('2d') as CanvasRenderingContext2D;

		// Clear the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		draw(ctx)
	};

	useEffect(() => {
		const canvas = canvasRef.current as HTMLCanvasElement;
		const context = canvas.getContext('2d')
		console.log(canvas.width);

		if (context) {
			draw(context)
		}
		window.addEventListener('resize', updateCanvas);
		return () => window.removeEventListener('resize', updateCanvas);
	}, [])

	return (
		<section className="flex flex-col items-center py-10 px-40">
			<h1 className="py-10"><b>How does FindMyTokens work?</b></h1>
			<h3>3 Simple Steps to Find Unclaimed Balanaces</h3>
			<div className="flex justify-between items-start my-32 relative">
				<canvas
					className="absolute w-full h-full -z-10"
					ref={canvasRef}
				/>
				<div className="flex flex-col items-center justify-start w-3/12">
					<h1
						className="bg-red-500 text-white rounded-full w-24 h-24 text-center flex items-center justify-center"
						ref={firstRef}
					>
						1
					</h1>
					<h3><b>Check For Matches</b></h3>
					<h4>We explore the Blockchain and analyze your past transactions, checking for interactions with centralized exchanges. </h4>
				</div>
				<div className="flex flex-col items-center justify-start w-3/12">
					<h1 className="bg-green-500 text-white rounded-full w-24 h-24 text-center flex items-center justify-center">2</h1>
					<h3><b>Download The Report</b></h3>
					<h4>We generate a report with the date, chain and name of the exchange where your wallet interacted with, you can manually enter those exchanges to check for unclaimed balances or close for peace of mind.</h4>
				</div>
				<div className="flex flex-col items-center w-3/12">
					<h1
						className="bg-blue-500 text-white rounded-full w-24 h-24 text-center flex items-center justify-center"
						ref={thirdRef}
					>
						3
					</h1>
					<h3><b>Choose A Wallet</b></h3>
					<h4>You enter your EVM wallet address and pay for the report.</h4>
				</div>
			</div>
		</section>
	)
}