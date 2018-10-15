import React from 'react';
import styled from 'styled-components';
import { flexDirectionOptions, justifyContentOptions, alignItemsOptions, alignContentOptions, flexWrapOptions } from './options'
import { Select } from './Select';

const Headline = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #ededed;
  padding-bottom: 15px;
`;

const Container = styled.div`
  min-width: 250px;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 1px 5px 0 rgba(0,0,0,.1);
`;

export const FlexOptions = ({ onChange }) => (
  <Container>
    <Headline><strong>Flexbox</strong> Playground</Headline>
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
  </Container>
);
