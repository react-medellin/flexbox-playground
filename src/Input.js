import React from 'react';
import styled from 'styled-components';
import { Title } from './Title';

const StyledInput = styled.input`
  border: 2px solid #333;
  width: 100%;
  border-radius: 0;
  box-sizing: border-box;

  &:focus {
    border-radius: 0;
    outline-color: #5c3799;
  }
`;

export const Input = ({ name, onChange }) => (
  <div>
    <Title>
      {name}
    </Title>
    <StyledInput
      name={name}
      type="number"
      onChange={onChange}
    />
  </div>
);
