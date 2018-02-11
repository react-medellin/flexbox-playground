import styled from 'styled-components';

export const Box = styled.div`
  background-color: ${props => props.primary ? '#5c3799' : '#a67d4c'};
  height: 120px;
  width: 120px;
`;
