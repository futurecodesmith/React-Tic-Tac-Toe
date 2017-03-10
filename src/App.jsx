import React, { Component } from 'react';
import './App.css';

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
      <Box state={this.state} prop="X"  />
    </div>
    )
  }
}

class Box extends Component {
  
  constructor(){
    super(); 
    this.state = {
        text: '-',
    }
  }
  
  toggleState() {
    return this.state.text === 'X' ? 
    this.setState({text: 'O'}) :
    this.setState({text: 'X'})
  }

  // selectBox() {

  // }

  // componentDidMount() {
  //   setInterval(this.toggleState.bind(this), 300); 
  // }

  render() {
    return (
      <button onClick={this.toggleState.bind(this)} className="button">
        {this.state.text}
      </button>
    )  
  }
}

