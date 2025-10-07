import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iriko from "../assets/iriko.jpg";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import type { Dispatch, SetStateAction } from "react";

export function Table({
	setFilterOpen
}: {
	setFilterOpen: Dispatch<SetStateAction<boolean>>
}) {

	return (
		<div id="table" className="flex flex-col capitalize rounded-2xl bg-white border border-[var(--color-border-lightGray)] overflow-scroll h-full">
			<div className="h-16 flex items-center justify-between px-10 bg-white sticky top-0 right-0 left-0 z-50">
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
			<div className="flex-1 w-full overflow-auto">
				<table className="min-w-max w-full border-separate border-spacing-0 text-sm">
					<thead className="h-16 sticky top-0 z-40 bg-base-light">
						<tr>
							<th className="bg-base-light px-5 border-y border-[var(--color-border-lightGray)] sticky left-0">name</th>
							<th className="bg-base-light px-5 border-y border-[var(--color-border-lightGray)]">category</th>
							<th className="bg-base-light px-5 border-y border-[var(--color-border-lightGray)]">category</th>
							<th className="bg-base-light px-5 border-y border-[var(--color-border-lightGray)]">category</th>
							<th className="bg-base-light px-5 border-y border-[var(--color-border-lightGray)]">category</th>
							<th className="bg-base-light px-5 border-y border-[var(--color-border-lightGray)]">category</th>
							<th className="bg-base-light px-5 border-y border-[var(--color-border-lightGray)]">category</th>
							<th className="bg-base-light px-5 border-y border-[var(--color-border-lightGray)]">category</th>
							<th className="bg-base-light px-5 border-y border-[var(--color-border-lightGray)]">category</th>
							<th className="bg-base-light px-5 border-y border-[var(--color-border-lightGray)]">category</th>
							<th className="bg-base-light px-5 border-y border-[var(--color-border-lightGray)]">category</th>
							<th className="bg-base-light px-5 border-y border-[var(--color-border-lightGray)]">category</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="bg-white sticky left-0 hover:bg-[var(--color-accent-lightBlue)] hover:text-[var(--color-accent-blue)]">
								<div className="flex items-center gap-2 p-5">
									<div className="w-15 h-15 rounded-full overflow-hidden">
										<img src={iriko} className="object-cover w-full h-full" />
									</div>
									<span>sample1</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
						</tr>
						<tr>
							<td className="sticky left-0">
								<div className="flex items-center gap-2 p-5 bg-white">
									<div className="w-15 h-15 rounded-full overflow-hidden">
										<img src={iriko} className="object-cover w-full h-full" />
									</div>
									<span>sample1</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
						</tr>
						<tr>
							<td className="sticky left-0">
								<div className="flex items-center gap-2 p-5 bg-white">
									<div className="w-15 h-15 rounded-full overflow-hidden">
										<img src={iriko} className="object-cover w-full h-full" />
									</div>
									<span>sample1</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
						</tr>
						<tr>
							<td className="sticky left-0">
								<div className="flex items-center gap-2 p-5 bg-white">
									<div className="w-15 h-15 rounded-full overflow-hidden">
										<img src={iriko} className="object-cover w-full h-full" />
									</div>
									<span>sample1</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
						</tr>
						<tr>
							<td className="sticky left-0">
								<div className="flex items-center gap-2 p-5 bg-white">
									<div className="w-15 h-15 rounded-full overflow-hidden">
										<img src={iriko} className="object-cover w-full h-full" />
									</div>
									<span>sample1</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
						</tr>
						<tr>
							<td className="sticky left-0">
								<div className="flex items-center gap-2 p-5 bg-white">
									<div className="w-15 h-15 rounded-full overflow-hidden">
										<img src={iriko} className="object-cover w-full h-full" />
									</div>
									<span>sample1</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
						</tr>
						<tr>
							<td className="sticky left-0">
								<div className="flex items-center gap-2 p-5 bg-white">
									<div className="w-15 h-15 rounded-full overflow-hidden">
										<img src={iriko} className="object-cover w-full h-full" />
									</div>
									<span>sample1</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
						</tr>
						<tr>
							<td className="sticky left-0">
								<div className="flex items-center gap-2 p-5 bg-white">
									<div className="w-15 h-15 rounded-full overflow-hidden">
										<img src={iriko} className="object-cover w-full h-full" />
									</div>
									<span>sample1</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
							<td>
								<div className="p-5">
									<span>sample1 - data</span>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}