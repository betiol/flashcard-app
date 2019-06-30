import React from 'react';
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { ROUTENAMES } from './RouteNames';
import UserStorage from '../shared/UserStorage';
import Colors from '../shared/Colors';
import Auth from '../scenes/Auth';
import DeckContainer from '../context/containers/DeckContainer';
import Feather from 'react-native-vector-icons/Feather';

const LoggedOutRoutes = createAppContainer(
	createSwitchNavigator(
		{
			[ROUTENAMES.AUTH]: {
				screen: Auth,
				navigationOptions: {
					header: null
				}
			}
		},
		{
			initialRouteName: 'Auth'
		}
	)
);

const LoggedInRoutes = createAppContainer(
	createSwitchNavigator(
		{
			[ROUTENAMES.DECKS]: { screen: DeckContainer }
		},
		{
			initialRouteName: 'Decks'
		}
	)
);

export { LoggedInRoutes, LoggedOutRoutes };
