import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: App,
})

function App() {
	return (
		<div className='h-1000 bg-base-light'>
			routes/index
		</div>
	)
}
