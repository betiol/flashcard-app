import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';
import { IMAGES } from '../images';
import { node } from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HeaderPop({ navigation }) {
	return (
		<React.Fragment>
			<SafeAreaView />
			<TouchableOpacity onPress={() => navigation.pop()}>
				<Arrow />
			</TouchableOpacity>
		</React.Fragment>
	);
}

const Arrow = styled.Image.attrs({
	source: IMAGES.ARROW
})`
  width: 30;
  height: 24;
	margin-top: 5;
	margin-left: 10px;
`;

export default withNavigation(HeaderPop);
