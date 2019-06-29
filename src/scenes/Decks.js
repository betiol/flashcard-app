/**
 * @flow
 */

import React, { useState } from 'react';
import {
	View,
	Platform,
	Text,
	SafeAreaView,
	Animated,
	FlatList,
	StatusBar,
	StyleSheet,
	ScrollView
} from 'react-native';
import { iOSUIKit, material, human } from 'react-native-typography';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components';
import Colors from '../shared/Colors';

const decks = [
	{ id: 1, name: 'Default', cards: 96, description: 'Cards to study english' },
	{ id: 2, name: 'MVS', cards: 100, description: 'Cards to study english' },
	{ id: 3, name: 'Phrasal Verbs', cards: 33, description: 'Cards to study english' },
	{ id: 4, name: 'Default', cards: 96, description: 'Cards to study english' },
	{ id: 5, name: 'MVS', cards: 100, description: 'Cards to study english' },
	{ id: 6, name: 'Phrasal Verbs', cards: 33, description: 'Cards to study english' },
	{ id: 7, name: 'Default', cards: 96, description: 'Cards to study english' },
	{ id: 8, name: 'MVS', cards: 100, description: 'Cards to study english' },
	{ id: 9, name: 'Phrasal Verbs', cards: 3, description: 'Cards to study english' }
];

function _renderDeck({ name, description, cards }, i) {
	return (
		<Item style={styles.item} key={i}>
			<View flex={2}>
				<Text style={human.headline}>{name}</Text>
				<Text style={material.caption}>{description}</Text>
			</View>
			<IconWrapper>
				<Feather color={Colors.lightGrey} name={'clipboard'} size={30} />
				<Text style={material.body2}>{cards}</Text>
			</IconWrapper>
		</Item>
	);
}

export default function Decks() {
	const [ scrollOffset, setScrollOffset ] = useState(new Animated.Value(0));
	return (
		<KeyboardWrapper>
			<SafeAreaView />
			<Animated.View
				style={[
					styles.header,
					{
						height: scrollOffset.interpolate({
							inputRange: [ 0, 60 ],
							outputRange: [ 90, 45 ],
							extrapolate: 'clamp'
						})
					}
				]}
			>
				<HeaderChild>
					<Animated.Text
						style={[
							styles.text,
							{
								fontSize: scrollOffset.interpolate({
									inputRange: [ 20, 40 ],
									outputRange: [ 34, 20 ],
									extrapolate: 'clamp'
								}),
								paddingBottom: scrollOffset.interpolate({
									inputRange: [ 20, 40 ],
									outputRange: [ 0, 20 ],
									extrapolate: 'clamp'
								})
							}
						]}
					>
						Decks
					</Animated.Text>
					<Image
						style={[
							styles.text,
							{
								width: scrollOffset.interpolate({
									inputRange: [ 20, 40 ],
									outputRange: [ 34, 20 ],
									extrapolate: 'clamp'
								})
							}
						]}
						source={{ uri: 'https://avatars1.githubusercontent.com/u/11700003?s=460&v=4' }}
					/>
				</HeaderChild>
				{/* <SearchInput placeholder={'Search'} /> */}
			</Animated.View>
			<ScrollView
				scrollEventThrottle={16}
				onScroll={Animated.event([
					{
						nativeEvent: {
							contentOffset: { y: scrollOffset }
						}
					}
				])}
			>
				{decks.map((deck, i) => _renderDeck(deck, i))}
			</ScrollView>
		</KeyboardWrapper>
	);
}

const KeyboardWrapper = styled.KeyboardAvoidingView.attrs({
	enabled: true,
	behavior: Platform.OS === 'ios' ? 'padding' : 'height'
})`
	flex: 1;
`;

const Body = styled.View`flex: 1;`;

const SearchInput = styled.TextInput`
	border-radius: 36px;
	background: ${Colors.lightGrey};
	height: 36px;
	padding-left: 10px;
	margin-top: 10px;
	border: none;

	color: ${Colors.grey};
`;

const Header = styled.View`justify-content: center;`;

const Item = styled.TouchableOpacity`
	margin: 8px;
	border-width: 1;
	border-color: ${Colors.lightGrey};
	border-radius: 5px;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	display: flex;
	padding: 10px;
	height: 80px;
	background: white;
`;

const IconWrapper = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const HeaderChild = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 5px;
`;

const Image = styled(Animated.Image)`
	padding: 20px;
	border-radius: 20px;
`;

const styles = StyleSheet.create({
	text: { ...iOSUIKit.largeTitleEmphasized },
	item: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 1
	},
	header: {
		borderBottomWidth: 1,
		padding: 10,
		justifyContent: 'center',
		paddingBottom: 10,
		borderColor: Colors.lightGrey
	}
});
