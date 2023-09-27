import React from 'react';
import { CardProps } from '../types/CardProps';

export default function CardBack({ flip, setFlip }: CardProps) {
	return (
		<div
			className={ 'h-card-height w-card-width rounded-lg mx-auto bg-card-back bg-center bg-contain bg-no-repeat' }
			onClick={ () => setFlip(!flip) }
		></div>
	);
}