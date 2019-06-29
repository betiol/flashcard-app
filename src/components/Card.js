/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components/native';

function Card({ children }) {
	return <Container>{children}</Container>;
}

const Container = styled.View`
	padding: 25px;
	width: 100%;
	background: white;
	border-radius: 10px;
`;

export { Card };
