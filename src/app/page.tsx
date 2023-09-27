'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Card from './components/Card';
import CardBack from './components/CardBack';
import SearchBar from './components/SearchBar';
import { useCardContext } from './cardProvider';
import { Cards } from 'mtgsdk-ts';

export default function Home() {
	const { search, setSearch, setCurrentCard } = useCardContext();
	const [flip, setFlip] = useState(false);

	async function searchClick(search: string): Promise<void> {
		setSearch(search);
		const fetchCard = await Cards.where({ name: search });
		if (fetchCard !== undefined) {
			const { name, manaCost, cmc, colors, type, rarity, power, toughness, set, text, id } = fetchCard[0];
			setCurrentCard(
				{ name, manaCost, cmc, colors, type, rarity, power, toughness, set, text, id }
			);
		}
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
