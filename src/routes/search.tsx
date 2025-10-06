import { createFileRoute } from '@tanstack/react-router'
import { Table } from '../components/Table'
import { Filter } from '../components/Filter';
import { useState } from 'react';

export const Route = createFileRoute('/search')({
	component: Search,
})

function Search() {
	const [isFilterOpen, setFilterOpen] = useState(false);

	return (
		<>
			<Table setFilterOpen={setFilterOpen} />
			<Filter isFilterOpen={isFilterOpen} setFilterOpen={setFilterOpen}/>
		</>
	);
}
