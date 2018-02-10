import React, { Component } from 'react';
import { Box } from './Box';
import './App.css';

const flexDirectionOptions = [
  'row',
  'row-reverse',
  'column',
  'column-reverse'
];

const justifyContentOptions = [
  'center',
  'flex-start',
  'flex-end',
  'left',
  'right',
  'space-between',
  'space-around',
  'space-evenly'
];

const alignItemsOptions = [
  'center',
  'flex-start',
  'flex-end',
];

const alignContentOptions = [
  'center',
  'flex-end',
  'flex-start',
  'space-between',
  'space-around',
  'space-evenly'
]

const flexWrapOptions = [
  'wrap',
  'nowrap',
  'wrap-reverse'
]

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
          display: flex
          flex-direction:
          <select name="flexDirection" onChange={this.onChange}>
            {flexDirectionOptions.map(option => {
              return (
                <option value={option} key={option}>{option}</option>
              );
            })}
          </select>
          justify-content
          <select name="justifyContent" onChange={this.onChange}>
            {justifyContentOptions.map(option => {
              return (
                <option value={option} key={option}>{option}</option>
              );
            })}
          </select>
          align-items
          <select name="align-items" onChange={this.onChange}>
            {alignItemsOptions.map(option => {
              return (
                <option value={option} key={option}>{option}</option>
              );
            })}
          </select>
          align-content
          <select name="alignContent" onChange={this.onChange}>
            {alignContentOptions.map(option => {
              return (
                <option value={option} key={option}>{option}</option>
              );
            })}
          </select>
          flex-wrap
          <select name="flexWrap" onChange={this.onChange}>
            {flexWrapOptions.map(option => {
              return (
                <option value={option} key={option}>{option}</option>
              );
            })}
          </select>
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
