import 'mana-font/css/mana.css';
import React from 'react';
import { CardProps } from '../types/CardProps';
import { Cards } from 'mtgsdk-ts';

export default async function Card ({ flip, setFlip, cardName }: CardProps) {
	// const card = await Cards.where({ name: 'Henrika Domnathi' });

	return (
		<div
			className={ 'h-card-height w-card-width rounded-lg mx-auto bg-stone-800' }
			onClick={ () => setFlip(!flip) }
		>
			<h1>{ card.name }</h1>
			{ card.manaCost }
		</div>
	);
}
