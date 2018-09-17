import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  a="Hello {''World''}"
  render() {
    return (
      <div className="App">
      {this.a}
      </div>
    );
  }
}

export default App;
