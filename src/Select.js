import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Title } from './Title';

const StyledSelect = styled.select`
  width: 100%;
  height: 29px;
  padding: 0 12px;
  margin-bottom: 0;
  background: #ebebeb url("./icons/arrow-down.svg") no-repeat;
  background-position: calc(100% - 6px) 4px;
  background-size: 22px;
  -webkit-appearance: none!important;
  -moz-appearance: none!important;
  appearance: none!important;
  color: #585858;
  font-size: 13px;
  line-height: 29px;
  font-weight: bold;
  border: 0;
  outline: 0;
  border-radius: 2px;
  cursor: pointer;
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