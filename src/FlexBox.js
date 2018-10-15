import React from 'react';
import { Box } from './Box';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0 20px 20px;
`;

const FlexContainerText = styled.div`
  font-size: 12px;
  color: #5c339b;
  margin-bottom: 2px;
`

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection};
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: ${({alignItems}) => alignItems};
  align-content: ${({alignContent}) => alignContent};
  flex-wrap: ${({flexWrap}) => flexWrap};
  padding: 2px;
  border: 2px dashed #5c3799;
`

export const FlexBoxWrapper = (props) => (
  <Wrapper>
    <FlexContainerText>flex-container</FlexContainerText>
    <FlexContainer {...props}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
      <Box>7</Box>
      <Box>8</Box>
    </FlexContainer>
  </Wrapper>
);
