import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Tongenerator from './Tongenerator';

export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      notePlaying: 996,
      noteOctave: 3,
    }
    this.noteArray = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"]

    this.handleNotechange = this.handleNotechange.bind(this);
  }

  handleNotechange(event){
    //console.log('handleNotechange')
    //console.log(event.target.id)
    let expression = event.target.id 

    switch(expression) {
      case 'minusett':
        // code block
        this.setState(prevState => {
          return {
            notePlaying : prevState.notePlaying - 1
          }
        })
        console.log('SWICH minusett')
        break;
      case 'plusett':
        // code block
        this.setState(prevState => {
          return {
            notePlaying : prevState.notePlaying + 1
          }
        })
        console.log('SWICH plusett')
        break;
        case 'minstolv':
        // code block
        this.setState(prevState => {
          return {
            noteOctave : prevState.noteOctave - 1
          }
        })
        console.log('SWICH minustolv')
        break;
        case 'plustolv':
        // code block
        this.setState(prevState => {
          return {
            noteOctave : prevState.noteOctave + 1
          }
        })
        console.log('SWICH plustolv')
        break;
      default:
        // code block
    }
  }
  
  render() {


    return (
      <div>      
<div className="greenborder vilkenton">{this.noteArray[this.state.notePlaying%12]}{this.state.noteOctave}</div>

<div id="minusett" onClick={this.handleNotechange} className="greenborder uppnerknappar">Ton ner</div>
<div id="plusett" onClick={this.handleNotechange} className="greenborder uppnerknappar">Ton upp</div>
<div id="minstolv" onClick={this.handleNotechange} className="greenborder uppnerknappar">oktav ner</div>
<div id="plustolv" onClick={this.handleNotechange} className="greenborder uppnerknappar">oktav upp</div>
<Tongenerator className="greenborder playpauseknapp"
              notePlaying={this.state.notePlaying}
              noteOctave={this.state.noteOctave}
            />
      </div>
    )
  }
}