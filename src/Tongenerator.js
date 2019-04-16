import React, { Component } from 'react'
import Tone from 'tone'
import PlayPause from './PlayPause'

export default class Tongenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
          playing: false
        };

        this.noteArray = ["c3", "c#3", "d3", "d#3", "e3", "f3", "f#3", "g3", "g#3", "a3", "a#3", "b3"]
        this.synth = new Tone.AMSynth().toMaster();
        this.play = this.play.bind(this);
      }

    play(note) {

        if (this.state.playing === false) {
          this.synth.triggerAttack(note);
          this.setState({playing: true})
        }
        else {
          this.synth.triggerRelease()
          this.setState({playing: false})
        }
      }


  render() {
    this.synth.setNote(this.noteArray[Number(this.props.notePlaying%11)])
    return (
      <div onClick={() => this.play(this.noteArray[Number(this.props.notePlaying)])}>
        <PlayPause  />
      </div>
      ) 

    }
  }