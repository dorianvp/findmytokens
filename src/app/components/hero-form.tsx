
import { resolveInput } from "@/actions";

export function HeroForm() {
	return (
		<form
			className="flex flex-col p-5 mt-2 w-full bg-white rounded-xl md:mt-6 lg:mt-10 lg:flex-row"
			action={resolveInput}
		>
			<input
				type="text"
				placeholder="Address"
				name="address"
				className="flex-grow px-2 py-4 w-full bg-white rounded-2xl border border-gray lg:mx-2 lg:w-max"
			/>
			<button
				type="submit"
				className="px-5 py-4 mt-5 w-full text-white bg-red-500 rounded-full lg:mt-0 lg:w-fit"
			>
				Generate Report
			</button>
		</form>
	)
}
