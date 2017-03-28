import React, { Component } from 'react';
import './App.css';

 export default class App extends Component {
  constructor(state) {
    super();
    this.state = {
      turn: 'X',
      boardState: {},
      gameOver: false
    }
  }

  stateAt(id) {
    return this.state.boardState[id];
  }

  checkColumn(id) {
    if (id >= 20) return this.stateAt(id) === this.stateAt(id - 10) && this.stateAt(id - 10) === this.stateAt(id - 20);
    else if (id >= 10) return this.stateAt(id) === this.stateAt(id - 10) && this.stateAt(id - 10) === this.stateAt(id + 10);
    else return this.stateAt(id) === this.stateAt(id + 10) && this.stateAt(id + 10) === this.stateAt(id + 20)
  }
  
  checkRow(id) {
    if (id % 10 === 0) return this.stateAt(id) === this.stateAt(id + 1) && this.stateAt(id + 1) === this.stateAt(id + 2);
    else if (id % 10 === 1) return this.stateAt(id) === this.stateAt(id - 1) && this.stateAt(id - 1) === this.stateAt(id + 1);
    else return this.stateAt(id) === this.stateAt(id -1) && this.stateAt(id - 1) === this.stateAt(id - 2)
  }

  checkDiagonal(id) {
    if (id === 0 || id === 22) {
      return this.stateAt(0) === this.stateAt(11) && this.stateAt(11) === this.stateAt(22)
    } else if (id === 2 || id === 20) {
      return this.stateAt(2) === this.stateAt(11) && this.stateAt(11) === this.stateAt(20)
    } else if (id === 11) {
      if ( (this.stateAt(0) === this.stateAt(11) && this.stateAt(11) === this.stateAt(22)) || (this.stateAt(2) === this.stateAt(11) && this.stateAt(11) === this.stateAt(20)) ) return true;
    }
    return false;

  }

  checkIfGameOver(id) {
    return this.checkColumn(id) ? true : 
           this.checkRow(id) ? true : 
           this.checkDiagonal(id) ? true : 
           Object.keys(this.state.boardState).length === 9
  }

  changeState(id) {
    let newBoard = this.state.boardState;
    if (this.state.turn === 'X') {
      newBoard[id] = 'X' 
      this.setState(Object.assign( this.state, { turn: 'O'} ));
    } else {
       newBoard[id] = 'O' 
      this.setState(Object.assign( this.state, { turn: 'X'} ));
    }
    if (this.checkIfGameOver(id)) {
      if (  Object.keys(this.state.boardState).length === 9) {
        this.setState(Object.assign( this.state, {winner: 'It is a Tie'} ))
      } else {
        this.setState(Object.assign( this.state, {winner: newBoard[id] + ' WINS!!!!'} ))
      }
    }
  }


  renderWinner() {
    return (
      <div className="winner"> {this.state.winner} </div>  
    )

  }

  newGame() {
    location.reload();
  }

  render() {
    return (
    <div className="container">
      <div>
        <h1>Tic Tac Toe</h1>
        <Board change={this.changeState.bind(this)} state={this.state} />
        {this.renderWinner()}
      </div>
      <div>
        {this.state.turn}
        <button onClick={this.newGame} id="newGame-button">New Game</button>
      </div>
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
      rows.push(<Row change={this.props.change} state={this.props.state} key={i} rowKey={i}/>)
    } 
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
      let id = this.props.rowKey*10+i
      boxes.push(<Box id={id} change={this.props.change} state={this.props.state} key={i} boxVal={{rowKey: this.props.rowKey, boxKey: i}}/>)
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
      this.icon = 'X' :
      this.icon = 'O' 
      this.props.change(this.props.id);
    }
  }

 

  render() {
    // console.log('ROW:', this.props.rowKey, 'BOX:', this.props.boxKey)
    // console.log(this.props.boxVal);
    return (
      <button onClick={this.toggleState.bind(this)} className="button">
        {this.icon}
      </button>
    )  
  }

}








