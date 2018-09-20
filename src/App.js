import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './CharacterCard';

const word = "Hello";
class App extends Component {
 render() {
 return (
 <div className= "card">
 {
     <WordCard value="hello12345"/>
 }
 </div>
 );
 }
}


export default App;
