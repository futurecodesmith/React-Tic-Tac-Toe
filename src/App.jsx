import React, { Component } from 'react';
import './App.css';

 export default class App extends Component {
  constructor(state) {
    super();
    //this.turn = 'X'
    this.state = {
      turn: '-',
    }
  }

  changeState() {
    return this.state.turn === 'X' ?
    this.setState({turn: 'O'}) :
    this.setState({turn: 'X'})
  }

  render() {
    return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board change={this.changeState.bind(this)} state={this.state} />
    </div>
    )
  }
}


class Board extends App {
  constructor(state) {
    super(state);    
  }



  populateBoard() {
    var rows = [];
    for (let i = 0; i < 3; i += 1) {
      rows.push(<Row change={this.props.change} state={this.props.state} key={i} />)
    } //Need to update props ^^
    return rows;
  }

  
  render() {
    return (
    <div>
     { this.populateBoard() }
    </div>
    )
  }


}


class Row extends Board {
  constructor(state) {
    super(state);    
  }

  populateRow() {
    var boxes = [];
    for (let i = 0; i < 3; i += 1) {
      boxes.push(<Box change={this.props.change} state={this.props.state} key={i} />)
    }
    return boxes;
  }

  
  render() {
    return (
    <div>
     { this.populateRow() }
    </div>
    )
  }


}


class Box extends Row {
  
  constructor(state){
    super(state); 
    this.icon = '-'
  }
  
  toggleState() {
    if (this.icon === '-') {
      this.props.state.turn === 'X' ?
      this.icon = 'O' :
      this.icon = 'X' 
      this.props.change()
    }
  }

  render() {
    return (
      <button onClick={this.toggleState.bind(this)} className="button">
        {this.icon}
      </button>
    )  
  }
}








