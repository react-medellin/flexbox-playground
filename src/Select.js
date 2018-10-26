import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Title } from './Title';

const StyledSelect = styled.select`
  border: 2px solid #333;
  width: 100%;
  border-radius: 0;

  &:focus {
    border-radius: 0;
    outline-color: #5c3799;
  }
`;

export const Select = ({ name, dataSource, onChange }) => (
  <div>
    <Title>
      {name}
    </Title>
    <StyledSelect
      name={name}
      onChange={onChange}
    >
      {dataSource.map(option => {
        return (
          <option
            value={option}
            key={option}
          >
            {option}
          </option>
        );
      })}
    </StyledSelect>
  </div>
);

Select.propTypes = {
  dataSource: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}