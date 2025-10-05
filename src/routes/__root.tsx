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
			<SideBar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
			<div className='flex-1 overflow-scroll relative bg-base-light'>
				<Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
				<div className='p-10 h-[calc(100vh-5rem)]'>
					<Outlet />
				</div>
			</div>
			<TanStackRouterDevtools />
		</StrictMode>
	);
}
