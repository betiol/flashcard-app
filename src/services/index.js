/**
 * @flow
 */

import firebase from 'react-native-firebase';
import UserStorage from '../shared/UserStorage';

export const db = firebase.database();

export const storage = firebase.storage;

export async function login(email: string, password: string) {
	const reference = await firebase.auth().signInWithEmailAndPassword(email, password);
	const token = await reference.user.getIdTokenResult();
	const user = { ...reference, ...token };
	return user;
}

export { firebase };
