import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Dispatch, SetStateAction } from "react";

export function Filter({
	isFilterOpen,
	setFilterOpen
}: {
	isFilterOpen: boolean;
	setFilterOpen: Dispatch<SetStateAction<boolean>>;
}) {

	return (
		<div className={`absolute inset-0 p-20 ${isFilterOpen ? "z-100 bg-black/50" : "hidden"}`}>
			<div className={`rounded-2xl bg-white p-10 ${isFilterOpen ? "block" : "hidden"}`}>
				<div className="flex items-center justify-between">
					<div className="capitalize text-xl font-bold">filter</div>
					<div
						className="border border-[var(--color-border-lightGray)] rounded-full w-10 h-10 flex items-center justify-center"
						onClick={() => setFilterOpen(false)}>
						<FontAwesomeIcon icon={faXmark} />
					</div>
				</div>
			</div>
		</div>
	);
}