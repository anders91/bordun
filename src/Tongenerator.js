import React, { Component } from 'react'
import Tone from 'tone'
import PlayPause from './PlayPause'

export default class Tongenerator extends Component {
    constructor() {
        super();
        this.state = {
          playing: false
        };
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
    return (
      <div onClick={() => this.play("d4")}>
        <PlayPause  />
      </div>
    )
  }
}
