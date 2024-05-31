import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { FullReport } from '@/actions';

// Create styles
const styles = StyleSheet.create({
	page: {
		// flexDirection: 'column',
		backgroundColor: '#FEFEFE',
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
		// alignItems: 'flex-start',
		// justifyContent: 'flex-start'
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		borderTop: '1px solid #EEE',
		paddingTop: 8,
		paddingBottom: 8,
	},
	header: {
		borderTop: 'none',
	},
	bold: {
		fontWeight: 'bold',
	},
	col1: {
		width: '50%',
		fontSize: 10
	},
	col2: {
		textAlign: 'center',
		width: '10%',
		fontSize: 8
	},
	col3: {
		textAlign: 'center',
		width: '10%',
		fontSize: 10
	},
	col4: {
		textAlign: 'center',
		width: '15%',
		fontSize: 8
	},
	col5: {
		textAlign: 'center',
		width: '15%',
		fontSize: 8
	}
});

type DocumentProps = {
	reportData: FullReport
}

// Create Document Component
export function MyDocument({ reportData }: DocumentProps) {
	const theDate = new Date(Date.now() * 1000);
	const dateString = theDate.toISOString();
	return (
		<Document title={reportData.wallet}>
			<Page
				size="A4"
				style={styles.page}
			>
				<View >
					<Text style={{
						color: '#473BF0',
						fontSize: 30,
						fontWeight: 'ultrabold'
					}}>FindMyTokens</Text>
				</View>
				<View>
					<View style={{
						padding: 5
					}}>
						<Text>Wallet: {reportData.wallet}</Text>
						<Text>Report number: #001</Text>
						<Text>Generated By: {reportData.email}</Text>
						<Text>Generated On: {dateString}</Text>
					</View>
				</View>
				<View style={{
					marginTop: 20
				}}>
					<Text>Overview</Text>
					<View style={{
						flexDirection: 'row',
						gap: 30,
						margin: 10
					}}>
						<View style={{
							backgroundColor: '#E3F5FF',
							paddingHorizontal: 20,
							paddingVertical: 30,
							borderRadius: 10
						}}>
							<Text>Transactions Analyzed: {reportData.txAnalyzed}</Text>
						</View>
						<View style={{
							backgroundColor: '#E5ECF6',
							paddingHorizontal: 20,
							paddingVertical: 30,
							borderRadius: 10
						}}>
							<Text>Matches Found: {reportData.matches}</Text>
						</View>
					</View>
				</View>
				<View style={{
					width: '100%'
				}}>
					<Text style={{
						marginVertical: 5
					}}>Ethereum</Text>
					<View style={[styles.row, styles.bold, styles.header]}>
						<Text style={styles.col1}>Matched Wallet Address</Text>
						<Text style={styles.col2}>Exchange Name</Text>
						<Text style={styles.col3}>Chain</Text>
						<Text style={styles.col4}>Date</Text>
						<Text style={styles.col5}>Sent or Received From Matched Wallet</Text>
					</View>

					{reportData.ethereum?.map((row, i) => (
						<View key={i} style={styles.row} wrap={false}>
							<Text style={[styles.col1, { flexWrap: 'nowrap' }]}>
								{row.to ? row.to : row.from}
							</Text>
							<Text style={styles.col2}>{row.cxName}</Text>
							<Text style={styles.col3}>Ethereum</Text>
							<Text style={styles.col4}>{new Date(Number(row.timestamp) * 1000).toUTCString()}</Text>
							{
								row.direction == 'to' ?
									<View style={styles.col5}>
										<Text style={{
											textAlign: 'center',
											backgroundColor: '#EAD9FE',
											paddingHorizontal: 1,
											paddingVertical: 2,
											borderRadius: 5
										}}>
											Sent
										</Text>
									</View> :
									<View style={styles.col5}>
										<Text style={{
											textAlign: 'center',
											backgroundColor: '#FDF2D7',
											paddingHorizontal: 1,
											paddingVertical: 2,
											borderRadius: 5
										}}>
											Received
										</Text>
									</View>
							}
						</View>
					))}
					<Text style={{
						marginVertical: 5
					}}>Binance Smart Chain</Text>
					<View style={[styles.row, styles.bold, styles.header]}>
						<Text style={styles.col1}>Matched Wallet Address</Text>
						<Text style={styles.col2}>Exchange Name</Text>
						<Text style={styles.col3}>Chain</Text>
						<Text style={styles.col4}>Date</Text>
						<Text style={styles.col5}>Sent or Received From Matched Wallet</Text>
					</View>
					{reportData.bsc?.map((row, i) => (
						<View key={i} style={styles.row} wrap={false}>
							<Text style={[styles.col1, { flexWrap: 'nowrap' }]}>
								{row.to ? row.to : row.from}
							</Text>
							<Text style={styles.col2}>{row.cxName}</Text>
							<Text style={styles.col3}>BSC</Text>
							<Text style={styles.col4}>{new Date(Number(row.timestamp) * 1000).toUTCString()}</Text>
							{
								row.direction == 'to' ?
									<View style={styles.col5}>
										<Text style={{
											textAlign: 'center',
											backgroundColor: '#EAD9FE',
											paddingHorizontal: 1,
											paddingVertical: 2,
											borderRadius: 5
										}}>
											Sent
										</Text>
									</View> :
									<View style={styles.col5}>
										<Text style={{
											textAlign: 'center',
											backgroundColor: '#FDF2D7',
											paddingHorizontal: 1,
											paddingVertical: 2,
											borderRadius: 5
										}}>
											Received
										</Text>
									</View>
							}
						</View>
					))}
					<Text style={{
						marginVertical: 5
					}}>Arbitrum</Text>
					<View style={[styles.row, styles.bold, styles.header]}>
						<Text style={styles.col1}>Matched Wallet Address</Text>
						<Text style={styles.col2}>Exchange Name</Text>
						<Text style={styles.col3}>Chain</Text>
						<Text style={styles.col4}>Date</Text>
						<Text style={styles.col5}>Sent or Received From Matched Wallet</Text>
					</View>
					{reportData.arbitrum?.map((row, i) => (
						<View key={i} style={styles.row} wrap={false}>
							<Text style={[styles.col1, { flexWrap: 'nowrap' }]}>
								{row.to ? row.to : row.from}
							</Text>
							<Text style={styles.col2}>{row.cxName}</Text>
							<Text style={styles.col3}>Arbitrum</Text>
							<Text style={styles.col4}>{new Date(Number(row.timestamp) * 1000).toUTCString()}</Text>
							{
								row.direction == 'to' ?
									<View style={styles.col5}>
										<Text style={{
											textAlign: 'center',
											backgroundColor: '#EAD9FE',
											paddingHorizontal: 1,
											paddingVertical: 2,
											borderRadius: 5
										}}>
											Sent
										</Text>
									</View> :
									<View style={styles.col5}>
										<Text style={{
											textAlign: 'center',
											backgroundColor: '#FDF2D7',
											paddingHorizontal: 1,
											paddingVertical: 2,
											borderRadius: 5
										}}>
											Received
										</Text>
									</View>
							}
						</View>
					))}
					<Text style={{
						textAlign: 'center',
						verticalAlign: 'sub',
						fontSize: 15,
						marginVertical: 10
					}}>
						Questions: support@findmytokens.com
					</Text>
					<Text style={{
						textAlign: 'center',
						verticalAlign: 'sub',
						fontSize: 10
					}}>
						© 2024 Copyright, All Right Reserved, Made by Darius & Maisteronix ❤️
					</Text>
				</View>
			</Page>
		</Document>
	)
};