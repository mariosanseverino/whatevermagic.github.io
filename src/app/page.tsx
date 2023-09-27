'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Card from './components/Card';
import CardBack from './components/CardBack';
import SearchBar from './components/SearchBar';
import { CardInfo } from './types/CardInfo';

export default function Home() {
	const [search, setSearch] = useState('');
	const [flip, setFlip] = useState(false);

	function searchClick(search: string): void {
		setSearch(search);
	}

	return (
		<main className="flex-row h-full w-full py-12">
			<Image
				className="mx-auto mb-4"
				src='/images/magic-logo.png'
				width={300}
				height={0}
				alt='Magic: The Gathering logo'
			/>
			<SearchBar
				search={ search }
				setSearch={ setSearch }
				searchClick={ searchClick }
			/>
			{ flip === false
				? <Card
					cardName={ search }
					flip={ flip }
					setFlip={ setFlip }
				/>
				: <CardBack
					flip={ flip }
					setFlip={ setFlip }
				/> }
      
		</main>
	);
}
