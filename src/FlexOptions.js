import React from 'react';
import styled from 'styled-components';
import { flexDirectionOptions, justifyContentOptions, alignItemsOptions, alignContentOptions, flexWrapOptions } from './options'
import { Select } from './Select';
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
      name="Boxes' Height and Width"
      onChange={onChange}
      width={width}
      height={height}
    />
  </Container>
);
