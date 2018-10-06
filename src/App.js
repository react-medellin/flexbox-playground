import React, { Component } from 'react';
import { FlexBox } from './FlexBox';
import { FlexOptions } from './FlexOptions';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'flex-start',
      flexWrap: 'wrap',
      width: 120,
      height: 120
    }
  };

  onChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <Container>
        <FlexOptions onChange={this.onChange} width={this.state.width} height={this.state.height} />
        <FlexBox {...this.state} />
      </Container>
    );
  }
}

export default App;
