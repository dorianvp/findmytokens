import { Head, Heading, Html, Preview, Text } from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
	wallet: string;
}

export function EmailReportTemplate({
	wallet,
}: EmailTemplateProps) {
	return (
		<Html>
			<Head>
				<title>Here is your report for wallet {wallet}</title>
			</Head>
			<Preview>Hey 👋 thanks for your purchase. You will find attached the report generated for your selected wallet.</Preview>
			<Heading as="h3">Here is your report for wallet {wallet}</Heading>
			<Text>
				Hey 👋 thanks for your purchase. You will find attached the report generated for your selected wallet.
			</Text>
			<Text>
				Please send us an email if you need help with anything. If you want further assistance we do offer custom search services that might be of interest to you.
			</Text>
			<Text>
				Thanks, <br />
				The findmytokens team
			</Text>
		</Html>
	);
}


/*
Asunto: Here is your report for wallet x

Body: Hey 👋 thanks for your purchase. You will find attached the report generated for your selected wallet. 

Please send us an email if you need help with anything. If you want further assistance we do offer custom search services that might be of interest to you.

Thanks,
The findmytokens team
 */