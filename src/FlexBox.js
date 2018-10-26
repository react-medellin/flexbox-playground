import React from "react";
import { Box } from "./Box";
import styled from "styled-components";

const Container = styled.div`
  width: calc(100% - 300px);
  height: 100vh;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  flex-wrap: ${({ flexWrap }) => flexWrap};
`;

const displayBoxes = ({ numberBoxes, width, height }) =>
  Array.from({ length: numberBoxes }, (_, i) => (
    <Box primary={i % 2 === 0} width={width} height={height} key={i}>
      {i + 1}
    </Box>
  ));

export const FlexBox = props => (
  <Container {...props}>{displayBoxes(props)}</Container>
);
