/**
 * @flow
 */

import React, { useState, useContext } from 'react';
import { View, Platform, Text, SafeAreaView, Animated, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { iOSUIKit, material, human } from 'react-native-typography';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from 'react-navigation-hooks';
import styled from 'styled-components';
import { Transition } from 'react-navigation-fluid-transitions';
import Colors from '../shared/Colors';
import { DecksContext, useDecks } from '../context/decks';
import { ROUTENAMES } from '../routes/RouteNames';

const { height } = Dimensions.get('window');

function _renderDeck(decks) {
	const { navigate } = useNavigation();
	const [ decksState, decksActions ] = useDecks();

	async function _navigateAndSetDeck(deck) {
		await decksActions.setDeck(deck);
		await navigate(ROUTENAMES.DECKSDETAILS);
	}

	return (
		<Item style={styles.item} onPress={() => _navigateAndSetDeck(decks)}>
			<View flex={2}>
				<Transition shared={'title'}>
					<Text style={human.headline}>{decks.name}</Text>
				</Transition>
				<Text style={material.caption}>{decks.description}</Text>
			</View>
			<IconWrapper>
				<Feather color={Colors.lightGrey} name={'clipboard'} size={30} />
				<Text style={material.body2}>{decks.cards}</Text>
			</IconWrapper>
		</Item>
	);
}

export default function Decks() {
	const { decks } = useContext(DecksContext);
	const [ screenHeight, setScreenHeight ] = useState(0);
	const [ scrollOffset, setScrollOffset ] = useState(new Animated.Value(0));
	const scrollEnabled = screenHeight > height;

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
									inputRange: [ 20, 50 ],
									outputRange: [ 34, 20 ],
									extrapolate: 'clamp'
								})
							}
						]}
					>
						Decks
					</Animated.Text>
					<Image
						style={{
							width: scrollOffset.interpolate({
								inputRange: [ 20, 40 ],
								outputRange: [ 34, 20 ],
								extrapolate: 'clamp'
							})
						}}
						source={{ uri: 'https://avatars1.githubusercontent.com/u/11700003?s=460&v=4' }}
					/>
				</HeaderChild>
				{/* <SearchInput placeholder={'Search'} /> */}
			</Animated.View>
			<ScrollView
				scrollEventThrottle={16}
				scrollEnabled={scrollEnabled}
				onContentSizeChange={(contentWidth, contentHeight) => setScreenHeight(contentHeight)}
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
	justify-content: flex-end;
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
