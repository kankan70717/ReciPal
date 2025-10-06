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
			<div className={`bg-white p-10 ${isFilterOpen ? "block" : "hidden"}`}>
				<button onClick={() => setFilterOpen(false)}>button</button>
				filter
			</div>
		</div>
	);
}