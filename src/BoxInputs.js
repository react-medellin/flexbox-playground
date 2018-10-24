import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Title } from './Title';

const StyledInput = styled.input`
  border: 2px solid #333;
  width: 100%;
  border-radius: 0;
  margin-bottom: 3px;

  &:focus {
	border-radius: 0;
	outline-color: #5c3799;
  }
`;

export const BoxInputs = ({
  name,
  width,
  height,
  onChange
}) => {
  return (
    <Fragment>
      <Title>
        {name}
      </Title>
      <StyledInput
        id="change-width-box"
        name="width"
        onChange={onChange}
        placeholder="width"
        type="number"
        value={width}
      />
      <StyledInput
        id="change-height-box"
        name="height"
        onChange={onChange}
        placeholder="height"
        type="number"
        value={height}
      />
    </Fragment>
  );
}

BoxInputs.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}