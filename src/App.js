import React, { Component } from 'react';
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
    const { flexDirection, justifyContent, alignItems, alignContent, flexWrap } = this.state;

    const styles = {
      flexBox: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection,
        justifyContent,
        alignItems,
        alignContent,
        flexWrap,
      }
    }

    return (
      <div className="App">
        <FlexOptions onChange={this.onChange} />
        <div className="flex-boxes" style={styles.flexBox}>
          <Box primary />
          <Box />
          <Box primary />
          <Box />
          <Box primary />
          <Box />
          <Box primary />
          <Box />
          <Box primary />
          <Box />
          <Box primary />
          <Box />
        </div>
      </div>
    );
  }
}

export default App;
