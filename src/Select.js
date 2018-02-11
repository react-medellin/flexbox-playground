import React from 'react';
import { Title } from './Title';

export const Select = ({ name, dataSource, onChange }) => (
  <div>
    <Title>{name}</Title>
    <select name={name} onChange={onChange}>
      {dataSource.map(option => {
        return (
          <option value={option} key={option}>{option}</option>
        );
      })}
    </select>
  </div>
);
