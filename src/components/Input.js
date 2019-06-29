/**
 * @flow
 */
import React from 'react';
import styled from 'styled-components/native';
import Colors from '../shared/Colors';

function Input({ placeholder, secureTextEntry, onChangeText }) {
	return (
		<TextInput
			secureTextEntry={secureTextEntry}
			onChangeText={onChangeText}
			autoCapitalize={'none'}
			placeholder={placeholder}
			underlineColorAndroid={'transparent'}
		/>
	);
}

const TextInput = styled.TextInput`
	padding: 10px;
	font-size: 16px;
	border-color: #ddd;
	color: ${Colors.write};
	border-bottom-width: 1;
	margin-bottom: 10px;
`;

export { Input };
