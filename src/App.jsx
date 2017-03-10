import React, { Component } from 'react';
import './App.css';
import Row from './Row';

 export default class App extends Component {
  constructor() {
    super();
    this.state = {
      turn: 'X'
    }
  }

  render() {
    return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Row />
    </div>
    )
  }
}

