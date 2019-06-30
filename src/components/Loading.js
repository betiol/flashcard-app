import React from 'react';
import styled from 'styled-components';
import { ActivityIndicator } from 'react-native';
import { node, bool } from 'prop-types';

export function Loading({ children, loading }) {
	if (!loading) return null;
	return (
		<Container>
			<ActivityIndicator size={'large'} />
			{children}
		</Container>
	);
}

Loading.propTypes = {
	children: node.isRequired,
	loading: bool.isRequired
};

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
