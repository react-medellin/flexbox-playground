import React, { Component } from 'react';
import { FlexBoxWrapper } from './FlexBox';
import { FlexOptions } from './FlexOptions';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 20px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'flex-start',
      flexWrap: 'wrap'
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
        <FlexOptions onChange={this.onChange} />
        <FlexBoxWrapper {...this.state} />
      </Container>
    );
  }
}

export default App;
