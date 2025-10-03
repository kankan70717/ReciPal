import { createFileRoute } from '@tanstack/react-router'
import { Table } from '../components/Table'

export const Route = createFileRoute('/search')({
	component: Search,
})

function Search() {
	return (
		<>
			<Table />
		</>
	);
}
