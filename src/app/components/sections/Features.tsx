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
		canvas.width = canvasRef.current?.getBoundingClientRect().width as number;
		canvas.height = canvasRef.current?.getBoundingClientRect().height as number;
		draw(ctx)
	};

	useEffect(() => {
		const canvas = canvasRef.current as HTMLCanvasElement;
		const context = canvas.getContext('2d');
		canvas.width = canvasRef.current?.getBoundingClientRect().width as number;
		canvas.height = canvasRef.current?.getBoundingClientRect().height as number;

		if (context) {
			draw(context)
		}
		window.addEventListener('resize', updateCanvas);
		return () => window.removeEventListener('resize', updateCanvas);
	}, [])

	return (
		<section className="flex flex-col items-center py-10 px-5 lg:px-40">
			<h1 className="py-5 text-center">
				<b>
					How does FindMyTokens work?
				</b>
			</h1>
			<div className="flex flex-col lg:flex-row justify-between items-center lg:items-start my-32 relative">
				<canvas
					className="absolute w-full h-full -z-10 lg:block hidden"
					ref={canvasRef}
				/>
				<div className="flex flex-col items-center justify-start w-10/12 lg:w-3/12 mb-10">
					<h1
						className="bg-red-500 text-white rounded-full w-24 h-24 text-center flex items-center justify-center font-mono"
						ref={firstRef}
					>
						1
					</h1>
					<h3 className="my-5 text-center"><b>Choose A Wallet</b></h3>
					<p className="text-center">Enter the EVM wallet you want to use to create a report.</p>
				</div>
				<div className="flex flex-col items-center justify-start w-10/12 lg:w-3/12 mb-10">
					<h1 className="bg-green-500 text-white rounded-full w-24 h-24 text-center flex items-center justify-center font-mono">
						2
					</h1>
					<h3 className="my-5 text-center"><b>Check For Matches</b></h3>
					<p className="text-center">
						We explore the Blockchain, analyzing your past transactions for interactions with centralized exchanges.
					</p>
				</div>
				<div className="flex flex-col items-center w-10/12 lg:w-3/12">
					<h1
						className="bg-blue-500 text-white rounded-full w-24 h-24 text-center flex items-center justify-center font-mono"
						ref={thirdRef}
					>
						3
					</h1>
					<h3 className="my-5 text-center"><b>Download The Report</b></h3>
					<p className="text-center">
						We generate a report detailing the specific interactions between your wallet and the exchanges.
					</p>
				</div>
			</div>
		</section>
	)
}