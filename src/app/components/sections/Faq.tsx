import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

export function FAQ() {
	return (
		<section className="px-5 py-10 lg:p-20 w-full">
			<section className="flex mb-10">
				<h2 className="text-dark-gray text-center">
					<b>
						Frequently Asked Questions
					</b>
				</h2>
			</section>
			<Separator />
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>
						<h3 className="text-left">
							<b>
								What is FindMyTokens?
							</b>
						</h3>
					</AccordionTrigger>
					<AccordionContent>
						<h4 className="font-mono">
							FindMyTokens is a web app that allows you to search for wallet transactions by entering your EVM public wallet address. We scan those wallet transactions and use advanced algorithms to match them with the public wallet addresses of registered cryptocurrency exchanges. Then, we generate a PDF report detailing the exchange, chain, and time the match was registered.
						</h4>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>
						<h3 className="text-left">
							<b>
								What is FindMyTokens useful for?
							</b>
						</h3>
					</AccordionTrigger>
					<AccordionContent>
						<ul className="list-disc">
							<li>
								<h4 className="font-mono">
									<b>Hackers identification:</b> Identify the exchanges used by hackers and report them, by scanning the wallet that stole your funds.
								</h4>
							</li>
							<li>
								<h4 className="font-mono">
									<b>Forgotten accounts:</b> Remember exchanges you have interacted with and where you likely have an account opened where tokens might still be in balance.
								</h4>
							</li>
							<li>
								<h4 className="font-mono">
									<b>Recordkeeping:</b> Keep track of dates and blockchains when sending tokens to centralized exchanges.
								</h4>
							</li>
						</ul>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>
						<h3 className="text-left">
							<b>
								Which blockchains does FindMyTokens work on?
							</b>
						</h3>
					</AccordionTrigger>
					<AccordionContent>
						<h4 className="font-mono">
							FindMyTokens currently generates reports for the Ethereum, Arbitrum, and Binance Smart Chain blockchains. More blockchains are coming soon. The price you pay includes all these three blockchains.
						</h4>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger>
						<h3 className="text-left">
							<b>
								Do I need to pay before the report is generated?
							</b>
						</h3>
					</AccordionTrigger>
					<AccordionContent>
						<h4 className="font-mono">
							No, we will do an initial scan for free and inform you if we have found something of interest for paying the full report first.
						</h4>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5">
					<AccordionTrigger>
						<h3 className="text-left">
							<b>
								How often are the exchange wallet address databases updated?
							</b>
						</h3>
					</AccordionTrigger>
					<AccordionContent>
						<h4 className="font-mono">
							Our databases of known exchange wallet addresses are regularly updated to ensure accurate and up-to-date matching. We closely monitor new exchanges and updates from existing ones.
						</h4>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-6">
					<AccordionTrigger>
						<h3 className="text-left">
							<b>
								Can you help with deeper analysis or assistance to institutions?
							</b>
						</h3>
					</AccordionTrigger>
					<AccordionContent>
						<h4 className="font-mono">
							Yes, we can most definitely do that. If you require more professional analysis, please contact us at <b>support@findmytokens.com</b>. We have helped law enforcement, hacked DAOs, drained individuals, exchanges, and more.
						</h4>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	)
}