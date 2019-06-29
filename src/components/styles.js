import styled from 'styled-components';
import Colors from '../shared/Colors';

export const Divider = styled.View`
	border-bottom-width: 1px;
	border-color: #ddd;
	margin-top: 10px;
	margin-bottom: 15px;
`;

export const Image = styled.Image`
	width: 60px;
	height: 60px;
	border-radius: 30px;
`;

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const Date = styled.Text`color: ${Colors.write};`;

export const SafeArea = styled.SafeAreaView`
	flex: 1;
	background-color: #f6f6f6;
`;
