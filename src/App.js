import React, { Component } from "react";
import { FlexBox } from "./FlexBox";
import { FlexOptions } from "./FlexOptions";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  padding: 20px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      alignItems: "stretch",
      alignContent: "stretch",
      width: 120,
      height: 120,
      numberBoxes: 10
    };
  }

  onChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container>
        <FlexOptions
          onChange={this.onChange}
          width={this.state.width}
          height={this.state.height}
          numberBoxes={this.state.numberBoxes}
        />
        <FlexBox {...this.state} />
      </Container>
    );
  }
}

export default App;
