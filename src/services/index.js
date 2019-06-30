/**
 * @flow
 */

import firebase from 'react-native-firebase';
import UserStorage from '../shared/UserStorage';

const db = firebase.database();

async function login(email, password) {
	const reference = await firebase.auth().signInWithEmailAndPassword(email, password);
	const token = await reference.user.getIdTokenResult();
	const user = { ...reference, ...token };
	return user;
}

async function getDecks() {
	const { user: { uid } } = await UserStorage.getUser();
	const request = await db.ref(`users/${uid}/decks`).once('value');
	const snapshot = await request.val();
	const decks = Object.values(snapshot);
	return decks;
}

export { firebase, login, getDecks };
