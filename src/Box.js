import React from 'react';

export const Box = ({ primary }) => {
  const boxStyles = {
    backgroundColor: primary ? 'blue' : 'green',
    height: 120,
    width: 120,
  }

  return (
    <div style={boxStyles}></div>
  );
};
