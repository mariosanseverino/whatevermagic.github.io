'use client';
import React from 'react';
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState
} from 'react';
import { CardInfo } from './types/CardInfo';

type ProviderProps = {
    children: ReactNode,
}

type CardContextProps = {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>,
	currentCard: CardInfo,
	setCurrentCard: Dispatch<SetStateAction<CardInfo>>,
}

export const CardContext = createContext({
	search: '',
	setSearch: () => {},
	currentCard: {
	} as CardInfo,
	setCurrentCard: () => {},
} as CardContextProps);

export function CardProvider({ children }: ProviderProps) {
	const [search, setSearch] = useState('');
	const [currentCard, setCurrentCard] = useState({
		name: 'Henrika Domnathi // Henrika, Infernal Seer',
		manaCost: '{2}{B}{B}',
		cmc: 4,
		colors: [ 'B' ],
		type: 'Legendary Creature — Vampire',
		rarity: 'Mythic',
		power: '1',
		toughness: '3',	
		set: 'VOW',
		text: 'Flying, deathtouch, lifelink',
		id: 'mario'
	});

	const cardSettings = {
		search,
		setSearch,
		currentCard,
		setCurrentCard,
	};

	return (
		<CardContext.Provider value={ cardSettings }>
			{ children }
		</CardContext.Provider>
	);
}

export function useCardContext() {
	return useContext(CardContext);
}
