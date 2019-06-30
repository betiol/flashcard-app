import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useDecks, DecksContext } from '../decks';
import { Loading } from '../../components';
import Decks from '../../scenes/Decks';

function DeckContainer() {
	const [ decksState, decksActions ] = useDecks();

	useEffect(() => {
		decksActions.fetchDecks();
	}, []);

	return (
		<DecksContext.Provider value={decksState}>
			{decksState.loading ? <Loading loading={decksState.loading} /> : <Decks />}
		</DecksContext.Provider>
	);
}

export default DeckContainer;
