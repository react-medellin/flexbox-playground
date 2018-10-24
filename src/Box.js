import styled from "styled-components";

export const Box = styled.div`
  background-color: ${props => (props.primary ? "#5c3799" : "#a67d4c")};
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
