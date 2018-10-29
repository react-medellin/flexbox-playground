import React from 'react';
import { Box } from './Box';
import styled from 'styled-components';

const FlexAreaWrapper = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

const FlexAreaText = styled.div`
  font-size: 12px;
  color: #5c339b;
  margin-bottom: 2px;
`;

const FlexContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection};
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: ${({alignItems}) => alignItems};
  align-content: ${({alignContent}) => alignContent};
  flex-wrap: ${({flexWrap}) => flexWrap};
  padding: 2px;
  border: 2px dashed #5c3799;
`;

const displayBoxes = ({ numberBoxes, width, height }) =>
  Array.from({ length: numberBoxes }, (_, i) =>
    <Box width={width} height={height} key={i}>{i+1}</Box>);

export const FlexBox = (props) => (
    <FlexAreaWrapper>
      <FlexAreaText>flex-container</FlexAreaText>
      <FlexContainer {...props}>
        {displayBoxes(props)}
      </FlexContainer>
  </FlexAreaWrapper>
);
