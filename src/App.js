import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import CharacterCard from './CharacterCard';
import WordCard from "./WordCard";
const word = "Hello";
class App extends Component {
  
  render() {
    return (
      <div>
        {
          <WordCard value="hello1"/>
        }
        
      </div>
    );
  }
}

export default App;


