import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { LoggedInRoutes, LoggedOutRoutes } from './routes';
import Colors from './shared/Colors';
import UserStorage from './shared/UserStorage';

class App extends Component {
	state = {
		user: null,
		loaded: false
	};

	componentDidMount() {
		this.loadUser();
	}

	async loadUser() {
		try {
			let user = await UserStorage.getUser();
			this.setState({ loaded: true, user });
		} catch (e) {
			this.setState({ loaded: true });
		}
	}

	onUserUpdate(user) {
		this.setState({ user });
		UserStorage.updateUser(user);
	}

	render() {
		let { user, loaded } = this.state;
		if (!loaded) {
			return null;
		}

		let Routes = LoggedInRoutes;
		if (!user) {
			Routes = LoggedOutRoutes;
		}
		return <Routes initialRouteName="Decks" screenProps={{ user, onUserUpdate: this.onUserUpdate.bind(this) }} />;
	}
}

export default App;
