import React from 'react';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { ROUTENAMES } from './RouteNames';
import UserStorage from '../shared/UserStorage';
import Colors from '../shared/Colors';
import Auth from '../scenes/Auth';
import DeckContainer from '../context/containers/DeckContainer';
import Feather from 'react-native-vector-icons/Feather';
import DecksDetails from '../scenes/DecksDetails';

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

const DecksFluidRoutes = FluidNavigator({
	[ROUTENAMES.DECKS]: { screen: DeckContainer },
	[ROUTENAMES.DECKSDETAILS]: { screen: DecksDetails }
});

const LoggedInRoutes = createAppContainer(
	createSwitchNavigator(
		{
			[ROUTENAMES.DECKS]: { screen: DecksFluidRoutes }
		},
		{
			initialRouteName: 'Decks'
		}
	)
);

export { LoggedInRoutes, LoggedOutRoutes };
