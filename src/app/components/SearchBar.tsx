'use client';
import React from 'react';
import { useState } from 'react';

interface SearchBarProps {
    searchClick(search: string): void,
}

export default function SearchBar({ searchClick }: SearchBarProps) {
	const [currentSearch, setCurrentSearch] = useState('');

	return (
		<form className="w-full my-4 text-center">
			<input
				id="cardSearch"
				name="cardSearch"
				type="text"
				placeholder="Card name"
				className="bg-black"
				onChange={ ({ target: { value } }) => setCurrentSearch(value) }
				value={ currentSearch }
			/>
			<button
				type="button"
				className="bg-slate-700 py-1 px-2 rounded-md"
				onClick={ () => searchClick(currentSearch) }
			>
                Search
			</button>
		</form>
	);
}