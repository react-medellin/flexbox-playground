import React, { Component } from 'react';
import { Box } from './Box';
import { Select } from './Select';
import { Title } from './Title';
import { flexDirectionOptions, justifyContentOptions, alignItemsOptions, alignContentOptions, flexWrapOptions } from './options'
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
        <div className="flex-options">
          <Title>display: flex</Title>
          <Select
            name="flexDirection"
            onChange={this.onChange}
            dataSource={flexDirectionOptions}
          />
          <Select
            name="justifyContent"
            onChange={this.onChange}
            dataSource={justifyContentOptions}
          />
          <Select
            name="alignItems"
            onChange={this.onChange}
            dataSource={alignItemsOptions}
          />
          <Select
            name="alignContent"
            onChange={this.onChange}
            dataSource={alignContentOptions}
          />
          <Select
            name="flexWrap"
            onChange={this.onChange}
            dataSource={flexWrapOptions}
          />
        </div>
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
