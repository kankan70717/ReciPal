import { useState } from "react";
import logo from "../../public/logo.svg"

export default function Header() {
	const [isProfileOpen, setProfileOpen] = useState(false);

	return (
		<header className="sticky top-0 left-0 right-0 h-20 flex items-center justify-end px-10 border-b-1 border-[var(--color-border-lightGray)] bg-white">
			<div className="relative">
				<div className="flex items-center gap-2 rounded-full border border-gray-400" onClick={() => setProfileOpen((prev) => !prev)}>
					<div className="w-10 h-10">
						<img src={logo} alt="" className="rounded-full w-full aspect-square object-cover" />
					</div>
				</div>
				<div className={`absolute top-12 right-0 rounded-xl border border-gray-300 bg-white duration-75 shadow-lg origin-top-right ${isProfileOpen == true ? "scale-100" : "scale-0"}`}>
					<ul className="flex flex-col gap-2 py-3">
						<li className="border-b-1 border-dashed border-gray-200 px-5 pb-2">
							<div className="font-bold">Raisu Staff</div>
							<div>sample@mail.com</div>
						</li>
						<li className="px-5 pt-2 text-red-500">
							Logout
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
