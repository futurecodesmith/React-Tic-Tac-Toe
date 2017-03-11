import React from 'react';
import './App.css';
import Row from './Row';


export default class Box extends Row {
  
  constructor(turn){
    super(turn); 
    this.icon = '-'
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
        {this.props.turn}
      </button>
    )  
  }
}



