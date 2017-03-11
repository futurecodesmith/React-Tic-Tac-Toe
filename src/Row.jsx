import React from 'react';
import './App.css';
import Box from './Box';
import App from './App';


export default class Row extends App {
  constructor(turn) {
    super(turn);    
  }

  populateRow() {
    var boxes = [];
    for (let i = 0; i < 3; i += 1) {
      boxes.push(<Box  key={i} />)
    }
    return boxes;
  }

  
  render() {
    return (
    <div>
     { this.populateRow() }
     {this.turn}
    </div>
    )
  }


}


