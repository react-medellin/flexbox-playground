import React from 'react';
import { Title } from './Title';

const selectStyles = {
  border: '2px solid #333',
  width: '100%',
  borderRadius: 0
};

export const Select = ({ name, dataSource, onChange }) => (
  <div>
    <Title>{name}</Title>
    <select name={name} onChange={onChange} style={selectStyles}>
      {dataSource.map(option => {
        return (
          <option value={option} key={option}>{option}</option>
        );
      })}
    </select>
  </div>
);
