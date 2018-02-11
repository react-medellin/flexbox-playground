import React, { Component } from 'react';
import { FlexBox } from './FlexBox';
import { FlexOptions } from './FlexOptions';
import { Box } from './Box';
import { Title } from './Title';
import './App.css';

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
      <div className="App">
        <FlexOptions onChange={this.onChange} />
        <FlexBox {...this.state} />
      </div>
    );
  }
}

export default App;
