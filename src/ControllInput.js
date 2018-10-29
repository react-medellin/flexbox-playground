import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Title } from './Title';

const StyledInput = styled.input`
    width: 100%;
    height: 29px;
    padding: 0 12px;
    margin-bottom: 0;
    background: #ebebeb;
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

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const ControllInput = ({
  name,
  onChange,
  title,
  value
}) => {
  return (
    <Fragment>
      <Title>
        {title}
      </Title>
      <StyledInput
        id="change-width-box"
        name={name}
        onChange={onChange}
        placeholder={name}
        type="number"
        value={value}
      />
    </Fragment>
  );
}

ControllInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}