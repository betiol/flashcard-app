/**
 * @flow
 */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../shared/Colors';

function PurpleRoundedButton({ text, onPress, radius, loading }) {
	return (
		<Container>
			<Button disabled={loading} onPress={onPress} radius={radius} bg>
				{loading ? <ActivityIndicator color={'white'} /> : <Text>{text}</Text>}
			</Button>
		</Container>
	);
}

function RaisedButton({ text, onPress }) {
	return (
		<Container>
			<Button onPress={onPress}>
				<Text color>{text}</Text>
			</Button>
		</Container>
	);
}

const Container = styled.View`width: 100%;`;

const Button = styled.TouchableOpacity`
	background-color: ${({ bg }) => (bg ? `${Colors.yellow}` : 'transparent')};
	border-radius: ${({ radius }) => (radius ? '50px' : '0px')};
	text-align: center;
	justify-content: center;
	align-items: center;
	padding: 12px;
	margin-top: 30px;
`;

const Raised = styled.TouchableOpacity`
	background-color: transparent;
	align-self: stretch;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding: 12px;
	margin: 20px;
`;

const Text = styled.Text`
	color: ${(props) => (props.color ? `${Colors.yellow}` : 'white')};
	font-size: 15px;
	font-weight: 500;
`;

export { PurpleRoundedButton, RaisedButton };
