import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Dispatch, SetStateAction } from "react";
import iriko from "../assets/iriko.jpg";

export function ListDetail({
	setFilterOpen
}: {
	setFilterOpen: Dispatch<SetStateAction<boolean>>
}) {

	return (
		<div className="flex flex-col capitalize rounded-2xl bg-white border border-[var(--color-border-lightGray)] h-full overflow-hidden text-sm">
			{/* header */}
			<div className="h-16 flex items-center justify-between px-5 bg-white border-b border-[var(--color-border-lightGray)]">
				<div className="text-xl font-bold">
					dish
				</div>
				<div>
					<button
						className="flex items-center gap-2 py-2 px-3 rounded-2xl border border-[var(--color-border-lightGray)]"
						onClick={() => setFilterOpen(true)}>
						<FontAwesomeIcon icon={faSliders} />
						<span className="capitalize">filter</span>
						<div className="flex items-center justify-center rounded-full w-6 h-6 bg-[var(--color-accent-lightBlue)] text-[var(--color-accent-blue)]">
							1
						</div>
					</button>
				</div>
			</div>
			<div className="flex-1 flex md:divide-x divide-[var(--color-border-lightGray)] h-50">
				{/* list */}
				<div className="md:flex-1/3 flex-1 flex flex-col overflow-y-scroll">
					<div className="flex items-center gap-2 p-5 hover:bg-[var(--color-accent-lightBlue)] hover:text-[var(--color-accent-blue)]">
						<div className="w-15 h-15 rounded-full overflow-hidden">
							<img src={iriko} className="object-cover w-full h-full" />
						</div>
						<span>sample1</span>
					</div>
				</div>
				{/* detail */}
				<div className="md:block md:flex-2/3 p-5 overflow-y-scroll hidden">
					a
				</div>
			</div>
		</div>
	);
}