import styled from "styled-components";

export const Box = styled.div`
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  margin: 2px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5c3799;
  font-size: 15px;
  &:nth-child(2n) {
    background-color: #7c65aa;
  }
  &:nth-child(3n) {
    background-color: #443377;
  }
`;
