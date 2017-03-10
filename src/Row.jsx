import React, { Component } from 'react';
import './App.css';
import Box from './Box';


export default class Row extends Component {
  constructor() {
    super();
    this.state = {
      turn: 'X'
    }
  }

  populateRow(){
    var boxes = [];
    for (let i = 0; i < 3; i += 1) {
      boxes.push(<Box key={i} state={this.state} prop="X"  />)
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


