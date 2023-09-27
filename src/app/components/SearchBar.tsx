'use client';
import React from 'react';

interface SearchBarProps {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    searchClick(search: string): void,
}

export default function SearchBar({ search, setSearch, searchClick }: SearchBarProps) {


	return (
		<form className="w-full my-4 text-center">
			<input
				id="cardSearch"
				name="cardSearch"
				type="text"
				placeholder="Card name"
				className="bg-black"
				onChange={ ({ target: { value } }) => setSearch(value) }
			/>
			<button
				type="button"
				className="bg-slate-700 py-1 px-2 rounded-md"
				onClick={ () => searchClick(search) }
			>
                Search
			</button>
		</form>
	);
}