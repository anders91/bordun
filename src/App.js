import React, { Component } from 'react';
import './reset.css'
import './App.css'
import Tongenerator from './Tongenerator';
//import Tongenerator from './Tongenerator'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isplaying: false,
      noteplaying: 1,


    }
  


  }

  handlePlaypause(){
    console.log('handlePlaypause')
  }

  handleNotechange(event){
    //console.log('handleNotechange')
    //console.log(event.target.id)
    let expression = event.target.id 

    switch(expression) {
      case 'minusett':
        // code block
        console.log('SWICH misuett')
        break;
      case 'plusett':
        // code block
        console.log('SWICH plusett')
        break;
        case 'minstolv':
        // code block
        console.log('SWICH minustolv')
        break;
        case 'plustolv':
        // code block
        console.log('SWICH plustolv')
        break;
      default:
        // code block
    }
  }
  
  render() {


    return (
      <div>
{//        <Tongenerator />
}        
<div className="greenborder vilkenton">{this.state.noteplaying}</div>
<div id="minusett" onClick={this.handleNotechange} className="greenborder uppnerknappar">Ton ner</div>
<div id="plusett" onClick={this.handleNotechange} className="greenborder uppnerknappar">Ton upp</div>
<div id="minstolv" onClick={this.handleNotechange} className="greenborder uppnerknappar">oktav ner</div>
<div id="plustolv" onClick={this.handleNotechange} className="greenborder uppnerknappar">oktav upp</div>
<Tongenerator className="greenborder playpauseknapp" />

      </div>
    )
  }
}


