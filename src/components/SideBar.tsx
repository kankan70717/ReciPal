import { faGear, faHouse, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@tanstack/react-router";
import type { Dispatch, SetStateAction } from "react";
import siteLogoWithText from "../assets/siteLogo_text.png";
import siteLogo from "../assets/siteLogo.png";

export function SideBar({
	isSidebarOpen,
	setSidebarOpen
}: {
	isSidebarOpen: boolean,
	setSidebarOpen: Dispatch<SetStateAction<boolean>>
}) {

	return (
		<>
			<div id="overlay" className={`absolute inset-0 z-50 md:hidden ${isSidebarOpen ? "block bg-black/50" : "hidden"}`}
				onClick={() => setSidebarOpen(prev => !prev)}></div>
			<div id="sideBar" className={`flex flex-col items-center gap-3 py-5 px-3 border-r-1 border-[var(--color-border-lightGray)] ease-in-out duration-500 fixed top-0 bottom-0 left-0 bg-white -translate-x-full z-100 md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0 w-50" : "w-20"}`}>
				<Link to="/">
					<div className="hidden md:flex items-center h-16 w-full">
						<img src={isSidebarOpen ? siteLogo : siteLogoWithText} className="object-cover h-full w-full" />
						{isSidebarOpen && <span className="text-[var(--color-accent-blue)] text-2xl">ReciPal</span>}
					</div>
				</Link>
				<div className="flex flex-col items-center gap-3 py-16 md:py-5 w-full">
					<Link
						to="/"
						activeProps={{
							className: "bg-[var(--color-accent-lightBlue)] text-[var(--color-accent-blue)]",
						}}
						className={`capitalize w-10 h-10 rounded-full flex justify-center items-center gap-2 hover:bg-[var(--color-accent-lightBlue)] hover:text-[var(--color-accent-blue)] ${isSidebarOpen && "w-full justify-start pl-5"}`}>
						<FontAwesomeIcon icon={faHouse} />
						{isSidebarOpen && "home"}
					</Link>
					<Link
						to="/search"
						activeProps={{
							className: "bg-[var(--color-accent-lightBlue)] text-[var(--color-accent-blue)]",
						}}
						className={`capitalize w-10 h-10 rounded-full flex justify-center items-center gap-2 hover:bg-[var(--color-accent-lightBlue)] hover:text-[var(--color-accent-blue)] ${isSidebarOpen && "w-full justify-start pl-5"}`}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
						{isSidebarOpen && "search"}
					</Link>
					<Link
						to="/setting"
						activeProps={{
							className: "bg-[var(--color-accent-lightBlue)] text-[var(--color-accent-blue)]",
						}}
						className={`capitalize w-10 h-10 rounded-full flex justify-center items-center gap-2 hover:bg-[var(--color-accent-lightBlue)] hover:text-[var(--color-accent-blue)] ${isSidebarOpen && "w-full justify-start pl-5"}`}>
						<FontAwesomeIcon icon={faGear} />
						{isSidebarOpen && "setting"}
					</Link>
					<Link
						to="/user"
						activeProps={{
							className: "bg-[var(--color-accent-lightBlue)] text-[var(--color-accent-blue)]",
						}}
						className={`capitalize w-10 h-10 rounded-full flex justify-center items-center gap-2 hover:bg-[var(--color-accent-lightBlue)] hover:text-[var(--color-accent-blue)] ${isSidebarOpen && "w-full justify-start pl-5"}`}>
						<FontAwesomeIcon icon={faUser} />
						{isSidebarOpen && "user"}
					</Link>
				</div>
			</div>
		</>
	);
}