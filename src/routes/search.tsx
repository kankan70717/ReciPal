import { createFileRoute } from '@tanstack/react-router'
import { Filter } from '../components/Filter';
import { useState } from 'react';
import { ListDetail } from '../components/ListDetail';

export const Route = createFileRoute('/search')({
	component: Search,
})

function Search() {
	const [isFilterOpen, setFilterOpen] = useState(false);

	return (
		<>
			{/* <Table setFilterOpen={setFilterOpen} /> */}
			<ListDetail setFilterOpen={setFilterOpen} />
			<Filter isFilterOpen={isFilterOpen} setFilterOpen={setFilterOpen}/>
		</>
	);
}
