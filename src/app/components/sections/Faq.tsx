import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

export function FAQ() {
	return (
		<section className="p-20 w-screen">
			<section className="flex mb-10">
				<h1 className="text-dark-gray">
					<b>
						Frequently Asked Questions
					</b>
				</h1>
			</section>
			<Separator />
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>
						<h3>
							<b>
								What is FindMyTokens?
							</b>
						</h3>
					</AccordionTrigger>
					<AccordionContent>
						FindMyTokens is a web app that allows you to search for wallet transactions by entering your EVM public wallet address. We scan those wallet transactions and use advanced algorithms to match them with the public wallet addresses of registered cryptocurrency exchanges. Then, we generate a PDF report detailing the exchange, chain, and time the match was registered.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>
						<h3>
							<b>
								What is FindMyTokens useful for?
							</b>
						</h3>
					</AccordionTrigger>
					<AccordionContent>
						<ul className="list-disc">
							<li>
								Hackers identification: Identify the exchanges used by hackers and report them, by scanning the wallet that stole your funds.
							</li>
							<li>
								Forgotten accounts: Remember exchanges you have interacted with and where you likely have an account opened where tokens might still be in balance.
							</li>
							<li>
								Recordkeeping: Keep track of dates and blockchains when sending tokens to centralized exchanges.
							</li>
						</ul>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>
						<h3>
							<b>
								Which blockchains does FindMyTokens work on?
							</b>
						</h3>
					</AccordionTrigger>
					<AccordionContent>
						FindMyTokens currently generates reports for the Ethereum, Polygon, and Binance Smart Chain blockchains. More blockchains are coming soon. The price you pay includes all these three blockchains.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger>
						<h3>
							<b>
								Do I need to pay before the report is generated?
							</b>
						</h3>
					</AccordionTrigger>
					<AccordionContent>
						No, we will do an initial scan for free and inform you if we have found something of interest for paying the full report first.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5">
					<AccordionTrigger>
						<h3>
							<b>
								How often are the exchange wallet address databases updated?
							</b>
						</h3>
					</AccordionTrigger>
					<AccordionContent>
						Our databases of known exchange wallet addresses are regularly updated to ensure accurate and up-to-date matching. We closely monitor new exchanges and updates from existing ones.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-6">
					<AccordionTrigger>
						<h3>
							<b>
								Can you help with deeper analysis or assistance to institutions?
							</b>
						</h3>
					</AccordionTrigger>
					<AccordionContent>
						Yes, we can most definitely do that. If you require more professional analysis, please contact us at support@findmytokens.com. We have helped law enforcement, hacked DAOs, drained individuals, exchanges, and more.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	)
}