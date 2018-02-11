import React from 'react';

const titleStyle = {
  color: '#333',
  fontWeight: 600,
  marginBottom: 10,
}

export const Title = ({ children }) => (
  <p style={titleStyle}>{children}</p>
);
