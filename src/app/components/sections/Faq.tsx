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
							FindMyTokens is an advanced analytics tool specifically crafted to aid in the recovery of stolen cryptocurrency assets. By meticulously analyzing the transaction history of a wallet across multiple blockchain networks, FindMyTokens identifies and matches transactions with wallet addresses associated with centralized exchanges. This process enables the generation of detailed reports that provide clear insights into interactions between a hacker wallet and exchanges, empowering you with essential information to recover lost or stolen tokens effectively.
						</h4>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>
						<h3 className="text-left">
							<b>
								How does FindMyTokens help me recover my stolen assets?
							</b>
						</h3>
					</AccordionTrigger>
					<AccordionContent>
						<h4 className="font-mono">
							FindMyTokens aids in recovering stolen assets by identifying transactions between the attacker's wallet and centralized exchanges. If the wallet that holds your stolen tokens ever interacted with an exchange, our tool detects these transactions. This information is crucial for reporting the incident to authorities or exchange platforms, providing evidence that can lead to the recovery of your stolen tokens.
						</h4>
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