import { createContext, useReducer } from 'react';
import { FETCH_DECKS, FETCH_DECKS_FAILURE, FETCH_DECKS_SUCCESS } from './common/constants';
import { getDecks } from '../services';
import UserStorage from '../shared/UserStorage';

/**
 * @context
 */

export const DecksContext = createContext({});

/**
 * @initial state
 */

const INITIAL_STATE = {
	decks: [],
	loading: false,
	error: null
};

/**
 * @reducer
 */

function decksReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_DECKS:
			return { ...state, loading: true };
		case FETCH_DECKS_SUCCESS:
			return { ...state, loading: false, decks: action.decks };
		case FETCH_DECKS_FAILURE:
			return { ...state, loading: false, error: action.error };
		default:
			return state;
	}
}

/**
 * @actions
 */

export function useDecks() {
	const [ state, dispatch ] = useReducer(decksReducer, {
		decks: [],
		loading: true,
		error: null
	});

	async function fetchDecks() {
		try {
			dispatch({ type: FETCH_DECKS });
			const decks = await getDecks();
			dispatch({ type: FETCH_DECKS_SUCCESS, decks });
		} catch (error) {
			dispatch({ type: FETCH_DECKS_FAILURE, error });
		}
	}

	return [ state, { fetchDecks } ];
}
