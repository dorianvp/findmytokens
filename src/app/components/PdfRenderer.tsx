'use client'
import React, { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';

export function PdfRendered({ pdfComponent }: { pdfComponent: React.ReactElement }) {
	const [pdfUrl, setPdfUrl] = useState('');

	useEffect(() => {
		const generatePdf = async () => {
			const blob = await pdf(pdfComponent).toBlob();
			const url = URL.createObjectURL(blob);
			setPdfUrl(url);
		};

		generatePdf();
		return () => {
			if (pdfUrl) {
				URL.revokeObjectURL(pdfUrl);
			}
		};
	}, []);

	return (
		<div>
			{pdfUrl && (
				<a
					href={pdfUrl}
					download="AnalysisResult.pdf"
					className="bg-danger text-white w-fit px-6 py-4 rounded-lg flex align-middle items-center"
				>
					Download PDF
				</a>
			)}
		</div>
	);
};