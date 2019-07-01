import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { Transition } from 'react-navigation-fluid-transitions';
import HeaderPop from '../components/HeaderPop';

function DecksDetails() {
	return (
		<View flex={1}>
			<HeaderPop />
			<Transition shared={'title'}>
				<Title>Default</Title>
			</Transition>
		</View>
	);
}

const Title = styled.Text`font-size: 40px;`;

export default DecksDetails;
