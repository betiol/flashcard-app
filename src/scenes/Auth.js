/**
 * @flow
 */

import React, { useState } from 'react';
import { View, ActivityIndicator, Alert, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from 'react-navigation-hooks';

import { Card, Input, PurpleRoundedButton } from '../components';
import { login } from '../services';
import Colors from '../shared/Colors';

function Auth({ screenProps }) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ loading, setLoading ] = useState(false);

	async function _login() {
		try {
			setLoading(true);
			if (!email || !password) {
				Alert.alert('Email ou senha não pode ficar em branco.');
				setLoading(false);
				return;
			}
			const user = await login(email, password);
			screenProps.onUserUpdate && screenProps.onUserUpdate(user);
			setLoading(false);
		} catch (error) {
			Alert.alert('Email ou senha incorretos.');
			setLoading(false);
		}
	}

	return (
		<Container>
			<ContainerChild>
				{/* <CoinsImage source={auth} /> */}
				<Title>Logo</Title>
				<Card>
					<Input onChangeText={(email) => setEmail(email)} value={email} placeholder={'Email'} />
					<Input
						onChangeText={(password) => setPassword(password)}
						value={password}
						secureTextEntry
						placeholder={'Senha'}
					/>
				</Card>
				<PurpleRoundedButton loading={loading} onPress={() => _login()} text={'Entrar'} />
			</ContainerChild>
		</Container>
	);
}

const Text = styled.Text``;

const ContainerChild = styled.View`
	flex: 1;
	justify-content: center;
	align-content: center;
	align-items: center;
	padding: 10px;
`;

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-content: center;
	padding: 10px;
	background-color: ${Colors.lightGrey};
`;

const CoinsImage = styled.Image`
	width: 200;
	height: 200;
`;

const Title = styled.Text`
	font-weight: bold;
	font-size: 16px;
	color: #3e3e3e;
	margin-bottom: 15px;
	text-align: center;
	color: ${Colors.write};
`;

export default Auth;
