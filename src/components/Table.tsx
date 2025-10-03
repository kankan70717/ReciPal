import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iriko from "../assets/iriko.jpg";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

export function Table() {

	return (
		<div id="table" className="capitalize rounded-2xl bg-white border border-[var(--color-border-lightGray)]">
			<div className="sticky top-0">
				<div className="flex items-center justify-between">
					<div className="text-xl font-bold p-5">
						dish
					</div>
					<div className="p-5">
						<button className="flex items-center gap-2 py-2 px-3 rounded-2xl border border-[var(--color-border-lightGray)]">
							<FontAwesomeIcon icon={faSliders} />
							<span className="capitalize">filter</span>
							<div className="flex items-center justify-center rounded-full w-6 h-6 bg-[var(--color-accent-lightBlue)] text-[var(--color-accent-blue)]">
								1
							</div>
						</button>
					</div>
				</div>
				<div className="flex">
					<div className="p-5 text-left bg-base-light">name</div>
					<div className="p-5 text-left bg-base-light">category</div>
					<div className="p-5 text-left bg-base-light">category</div>
					<div className="p-5 text-left bg-base-light">category</div>
					<div className="p-5 text-left bg-base-light">category</div>
					<div className="p-5 text-left bg-base-light">category</div>
					<div className="p-5 text-left bg-base-light">category</div>
					<div className="p-5 text-left bg-base-light">category</div>
					<div className="p-5 text-left bg-base-light">category</div>
					<div className="p-5 text-left bg-base-light">category</div>
					<div className="p-5 text-left bg-base-light">category</div>
					<div className="p-5 text-left bg-base-light">category</div>
				</div>
			</div>
			<table className="w-full h-[calc(100%-5rem)] overflow-scroll">
				<tbody>
					<tr>
						<td className="p-5 flex items-center gap-2 sticky top-0">
							<div className="w-15 h-15 rounded-full overflow-hidden">
								<img src={iriko} className="object-cover w-full h-full" />
							</div>
							<span>sample1</span>
						</td>
						<td className="p-5 flex items-center gap-2 sticky top-0">
							<div className="w-15 h-15 rounded-full overflow-hidden">
								<img src={iriko} className="object-cover w-full h-full" />
							</div>
							<span>sample</span>
						</td><td className="p-5 flex items-center gap-2 sticky top-0">
							<div className="w-15 h-15 rounded-full overflow-hidden">
								<img src={iriko} className="object-cover w-full h-full" />
							</div>
							<span>sample</span>
						</td><td className="p-5 flex items-center gap-2 sticky top-0">
							<div className="w-15 h-15 rounded-full overflow-hidden">
								<img src={iriko} className="object-cover w-full h-full" />
							</div>
							<span>sample</span>
						</td><td className="p-5 flex items-center gap-2 sticky top-0">
							<div className="w-15 h-15 rounded-full overflow-hidden">
								<img src={iriko} className="object-cover w-full h-full" />
							</div>
							<span>sample</span>
						</td><td className="p-5 flex items-center gap-2 sticky top-0">
							<div className="w-15 h-15 rounded-full overflow-hidden">
								<img src={iriko} className="object-cover w-full h-full" />
							</div>
							<span>sample</span>
						</td><td className="p-5 flex items-center gap-2 sticky top-0">
							<div className="w-15 h-15 rounded-full overflow-hidden">
								<img src={iriko} className="object-cover w-full h-full" />
							</div>
							<span>sample</span>
						</td><td className="p-5 flex items-center gap-2 sticky top-0">
							<div className="w-15 h-15 rounded-full overflow-hidden">
								<img src={iriko} className="object-cover w-full h-full" />
							</div>
							<span>sample</span>
						</td><td className="p-5 flex items-center gap-2 sticky top-0">
							<div className="w-15 h-15 rounded-full overflow-hidden">
								<img src={iriko} className="object-cover w-full h-full" />
							</div>
							<span>sample</span>
						</td><td className="p-5 flex items-center gap-2 sticky top-0">
							<div className="w-15 h-15 rounded-full overflow-hidden">
								<img src={iriko} className="object-cover w-full h-full" />
							</div>
							<span>sample</span>
						</td><td className="p-5 flex items-center gap-2 sticky top-0">
							<div className="w-15 h-15 rounded-full overflow-hidden">
								<img src={iriko} className="object-cover w-full h-full" />
							</div>
							<span>sample</span>
						</td><td className="p-5 flex items-center gap-2 sticky top-0">
							<div className="w-15 h-15 rounded-full overflow-hidden">
								<img src={iriko} className="object-cover w-full h-full" />
							</div>
							<span>sample</span>
						</td><td className="p-5 flex items-center gap-2 sticky top-0">
							<div className="w-15 h-15 rounded-full overflow-hidden">
								<img src={iriko} className="object-cover w-full h-full" />
							</div>
							<span>sample</span>
						</td><td className="p-5 flex items-center gap-2 sticky top-0">
							<div className="w-15 h-15 rounded-full overflow-hidden">
								<img src={iriko} className="object-cover w-full h-full" />
							</div>
							<span>sample</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}