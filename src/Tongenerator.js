import React, { Component } from 'react'
import Tone from 'tone'
import PlayPause from './PlayPause'

export default class Tongenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
          playing: false
        };

        this.noteArray = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"]
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
    this.synth.setNote(
      this.noteArray[
        this.props.notePlaying%12] + 
        this.props.noteOctave)
    return (
      <div onClick={() => this.play(
        this.noteArray[
          this.props.notePlaying%12] + 
          this.props.noteOctave)}>
        <PlayPause  />
      </div>
      ) 

    }
  }