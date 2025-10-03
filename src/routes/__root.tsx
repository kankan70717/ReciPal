import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { StrictMode } from 'react'
import { SideBar } from '../components/SideBar'
import Header from '../components/Header'

export const Route = createRootRoute({
	component: () => (
		<StrictMode>
			<SideBar />
			<div className='flex-1 overflow-scroll relative'>
				<Header />
				<Outlet />
			</div>
			<TanStackRouterDevtools />
		</StrictMode>
	),
})
