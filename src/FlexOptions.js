import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import {
  flexDirectionOptions,
  justifyContentOptions,alignItemsOptions,
  alignContentOptions,
  flexWrapOptions
} from './options';
import { Select } from './Select';
import { Input } from './Input';
import { Title } from './Title';
import { BoxInputs } from './BoxInputs';

const Container = styled.div`
  width: 300px;
  height: 100vh;
  padding: 10px;
  border: 2px solid #333;
  box-sizing: border-box;
`;

export const FlexOptions = ({
  onChange,
  width,
  height
}) => (
  <Container>
    <Title>display: flex</Title>
    <Select
      name="flexDirection"
      onChange={onChange}
      dataSource={flexDirectionOptions}
    />
    <Select
      name="justifyContent"
      onChange={onChange}
      dataSource={justifyContentOptions}
    />
    <Select
      name="alignItems"
      onChange={onChange}
      dataSource={alignItemsOptions}
    />
    <Select
      name="alignContent"
      onChange={onChange}
      dataSource={alignContentOptions}
    />
    <Select
      name="flexWrap"
      onChange={onChange}
      dataSource={flexWrapOptions}
    />
    <BoxInputs
      name="Boxes' Width and Height"
      onChange={onChange}
      width={width}
      height={height}
    />
    <Input
      name="numberBoxes"
      onChange={onChange}
    />
  </Container>
);


FlexOptions.propTypes = {
  onChange: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}
