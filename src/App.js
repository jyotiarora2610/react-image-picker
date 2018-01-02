import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  ldImagePickerWrapper: {
    width: '100%',
    height: '100px',
    background: 'teal',
    display: 'flex'
  },
  ldPickerList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'flex-start',
    flex: 12,
    overflow: 'scroll'
  },
  ldPickerButton: {
    width: '100px',
    height: '100px',
    background: 'yellow'
  },
  ldPickerImage: {
    width: '100px',
    height: '100px',
    background: 'red',
    display: 'inline-block',
    marginRight: '5px',
    flexShrink: 0
  }
};

const imageList = [
  {
    id: 1,
    name: 'hello'
  },
  {
    id: 2,
    name: 'hello'
  },
  {
    id: 3,
    name: 'hello'
  },
  {
    id: 4,
    name: 'hello'
  },
  {
    id: 5,
    name: 'hello'
  },
  {
    id: 6,
    name: 'hello'
  },
  {
    id: 7,
    name: 'hello'
  },

]

const LdImagePicker = (props) => (
  <div style={styles.ldImagePickerWrapper}>
    <div style={styles.ldPickerList}>
      {imageList.map(() => (
        <div style={styles.ldPickerImage}>hi</div>
      ))}
    </div>
    <input
      style={{
        width: '0.1px',
        height: '0.1px',
        opacity: 0,
        overflow: 'hidden',
        position: 'absolute',
        zIndex: -1
      }}
      id='file'
      type='file'
      accept='image/*'
      onChange={props.onChange}
    />
    <label
      style={{
        display: 'block',
        width: '80px',
        textAlign: 'center',
        background: '#80c241',
        padding: '15px',
        color: '#fff',
        borderRadius: '2px',
        fontWeight: '300'
      }}
      for='file'>Upload Prescription</label>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <LdImagePicker />
        </p>
      </div>
    );
  }
}

export default App;
