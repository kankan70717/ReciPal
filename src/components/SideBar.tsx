import { faGear, faHouse, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SideBar({ isSidebarOpen }: { isSidebarOpen: boolean }) {

	return (
		<div id="sideBar" className={`relative flex flex-col items-center gap-3 px-5 border-r-1 border-[var(--color-border-lightGray)] ease-in-out duration-500 ${isSidebarOpen ? "w-50 items-start" : "w-20"}`}>
			<div className="flex flex-col items-center gap-3 py-20 w-full">
				<div className={`capitalize w-10 h-10 rounded-full flex justify-center items-center gap-2 hover:bg-[var(--color-accent-lightBlue)] hover:text-[var(--color-accent-blue)] ${isSidebarOpen && "w-full justify-start pl-5"}`}>
					<FontAwesomeIcon icon={faHouse} />
					{isSidebarOpen == true ? "home" : ""}
				</div>
				<div className={`capitalize w-10 h-10 rounded-full flex justify-center items-center gap-2 hover:bg-[var(--color-accent-lightBlue)] hover:text-[var(--color-accent-blue)] ${isSidebarOpen && "w-full justify-start pl-5"}`}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					{isSidebarOpen == true ? "search" : ""}
				</div>
				<div className={`capitalize w-10 h-10 rounded-full flex justify-center items-center gap-2 hover:bg-[var(--color-accent-lightBlue)] hover:text-[var(--color-accent-blue)] ${isSidebarOpen && "w-full justify-start pl-5"}`}>
					<FontAwesomeIcon icon={faGear} />
					{isSidebarOpen == true ? "setting" : ""}
				</div>
				<div className={`capitalize w-10 h-10 rounded-full flex justify-center items-center gap-2 hover:bg-[var(--color-accent-lightBlue)] hover:text-[var(--color-accent-blue)] ${isSidebarOpen && "w-full justify-start pl-5"}`}>
					<FontAwesomeIcon icon={faUser} />
					{isSidebarOpen == true ? "user" : ""}
				</div>
			</div>
		</div>
	);
}