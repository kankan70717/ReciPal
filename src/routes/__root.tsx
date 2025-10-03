import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { StrictMode, useState } from 'react'
import { SideBar } from '../components/SideBar'
import Header from '../components/Header'

export const Route = createRootRoute({
	component: RootLayout,
})

function RootLayout() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	return (
		<StrictMode>
			<SideBar isSidebarOpen={isSidebarOpen} />
			<div className='flex-1 overflow-scroll relative'>
				<Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}/>
				<Outlet />
			</div>
			<TanStackRouterDevtools />
		</StrictMode>
	);
}
