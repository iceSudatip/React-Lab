import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
import IceCoe from './IceCoe';

const word = "swimming";
const ice="kitty"
class App extends Component{
  render(){
    return(
      <div>
        <WordCard value={word}/>
        <IceCoe value={ice}/>
      </div>
    );
  }
}

export default App;