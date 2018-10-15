import styled from 'styled-components';

export const Box = styled.div`
  background-color: #5c3799;
  height: 120px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #fff;
  margin: 2px;

  &:nth-child(2n){
    background-color: #7c65aa;
  }
  &:nth-child(3n){
    background-color: #443377;
  }
`;
