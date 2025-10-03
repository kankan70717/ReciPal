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
			<div id="overlay" className={`md:hidden absolute inset-0 z-50 ${isSidebarOpen ? "block bg-black/50" : "bg-none"}`}
				onClick={() => setSidebarOpen(prev => !prev)}></div>
			<div id="sideBar" className={`flex flex-col items-center gap-3 py-5 px-3 border-r-1 border-[var(--color-border-lightGray)] ease-in-out duration-500 fixed top-0 bottom-0 left-0 bg-white -translate-x-full z-100 md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0 w-50" : "w-20"}`}>
				<Link to="/">
						{isSidebarOpen
							? <div className="flex items-center h-15">
								<img src={siteLogo} className="w-full h-full" />
								<span className="text-[var(--color-accent-blue)] text-2xl">ReciPal</span>
							</div>
							: <img src={siteLogoWithText} />
						}
					</Link>
				<div className="flex flex-col items-center gap-3 py-5 w-full">
					<Link
						to="/"
						activeProps={{
							className: "bg-[var(--color-accent-lightBlue)] text-[var(--color-accent-blue)]",
						}}
						className={`capitalize w-10 h-10 rounded-full flex justify-center items-center gap-2 hover:bg-[var(--color-accent-lightBlue)] hover:text-[var(--color-accent-blue)] ${isSidebarOpen && "w-full justify-start pl-5"}`}>
						<FontAwesomeIcon icon={faHouse} />
						{isSidebarOpen && "home"}
					</Link>
					<div className={`capitalize w-10 h-10 rounded-full flex justify-center items-center gap-2 hover:bg-[var(--color-accent-lightBlue)] hover:text-[var(--color-accent-blue)] ${isSidebarOpen && "w-full justify-start pl-5"}`}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
						{isSidebarOpen && "search"}
					</div>
					<div className={`capitalize w-10 h-10 rounded-full flex justify-center items-center gap-2 hover:bg-[var(--color-accent-lightBlue)] hover:text-[var(--color-accent-blue)] ${isSidebarOpen && "w-full justify-start pl-5"}`}>
						<FontAwesomeIcon icon={faGear} />
						{isSidebarOpen && "setting"}
					</div>
					<div className={`capitalize w-10 h-10 rounded-full flex justify-center items-center gap-2 hover:bg-[var(--color-accent-lightBlue)] hover:text-[var(--color-accent-blue)] ${isSidebarOpen && "w-full justify-start pl-5"}`}>
						<FontAwesomeIcon icon={faUser} />
						{isSidebarOpen && "user"}
					</div>
				</div>
			</div>
		</>
	);
}