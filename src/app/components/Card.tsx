import 'mana-font/css/mana.css';
import React from 'react';
import { CardProps } from '../types/CardProps';
import { useCardContext } from '../cardProvider';

export default function Card ({ flip, setFlip }: CardProps) {
	const { currentCard } = useCardContext();

	return (
		<div
			className={ 'h-card-height w-card-width rounded-lg mx-auto bg-stone-800' }
			onClick={ () => setFlip(!flip) }
		>
			<h1>{ currentCard.name }</h1>
			{ currentCard.manaCost }
		</div>
	);
}
