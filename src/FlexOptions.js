import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import {
  flexDirectionOptions,
  flexWrapOptions,
  justifyContentOptions,
  alignItemsOptions,
  alignContentOptions
} from "./options";
import { Select } from "./Select";
import { ControllInput } from "./ControllInput";

const ControllsContainer = styled.div`
  min-width: 300px;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
`;

const ControllsSection = styled.div`
  border-bottom: 1px solid #ededed;
  padding-bottom: 30px;
`;

const Headline = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #ededed;
  padding-bottom: 15px;
`;

export const FlexOptions = ({ numberBoxes, onChange, width, height }) => (
  <ControllsContainer>
    <ControllsSection>
      <Headline>
        <strong>Flexbox</strong> Playground
      </Headline>
      <Select
        name="flexDirection"
        onChange={onChange}
        dataSource={flexDirectionOptions}
      />
      <Select
        name="flexWrap"
        onChange={onChange}
        dataSource={flexWrapOptions}
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
    </ControllsSection>
    <ControllsSection>
      <ControllInput
        title="Boxes' width (px)"
        name="width"
        onChange={onChange}
        value={width}
      />
      <ControllInput
        title="Boxes' height (px)"
        name="height"
        onChange={onChange}
        value={height}
      />
      <ControllInput
        title="Number of boxes"
        name="numberBoxes"
        onChange={onChange}
        value={numberBoxes}
      />
    </ControllsSection>
  </ControllsContainer>
);

FlexOptions.propTypes = {
  numberBoxes: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};
