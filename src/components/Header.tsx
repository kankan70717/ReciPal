import { useState, type Dispatch, type SetStateAction } from "react";
import logo from "../../public/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function Header({
	isSidebarOpen,
	setSidebarOpen
}: {
	isSidebarOpen: boolean,
	setSidebarOpen: Dispatch<SetStateAction<boolean>>
}) {
	const [isProfileOpen, setProfileOpen] = useState(false);

	return (
		<header className="sticky z-100 top-0 left-0 right-0 h-16 flex items-center justify-between px-5 border-b-1 border-[var(--color-border-lightGray)] bg-white">
			<div className={`border border-[var(--color-border-lightGray)] w-10 h-10 rounded-full flex justify-center items-center`}>
				{
					isSidebarOpen ?
						<FontAwesomeIcon icon={faAnglesLeft} onClick={() => setSidebarOpen(prev => !prev)} />
						: <FontAwesomeIcon icon={faAnglesRight} onClick={() => setSidebarOpen(prev => !prev)} />

				}
			</div>
			<div className="relative">
				<div className="flex items-center gap-2 rounded-full border border-[var(--color-border-lightGray)]" onClick={() => setProfileOpen((prev) => !prev)}>
					<div className="w-10 h-10">
						<img src={logo} alt="" className="rounded-full w-full aspect-square object-cover" />
					</div>
				</div>
				<div className={`absolute top-12 right-0 rounded-xl border border-[var(--color-border-lightGray)] bg-white duration-75 shadow-lg origin-top-right ${isProfileOpen == true ? "scale-100" : "scale-0"}`}>
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
