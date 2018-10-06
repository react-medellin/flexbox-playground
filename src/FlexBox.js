import React from 'react';
import { Box } from './Box';
import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 300px);
  height: 100vh;
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection};
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: ${({alignItems}) => alignItems};
  align-content: ${({alignContent}) => alignContent};
  flex-wrap: ${({flexWrap}) => flexWrap};
`;

export const FlexBox = (props) => (
  <Container {...props}>
    <Box primary />
    <Box />
    <Box primary />
    <Box />
    <Box primary />
    <Box />
    <Box primary />
    <Box />
    <Box primary />
    <Box />
    <Box primary />
    <Box />
  </Container>
);
