import React from "react";

import playImg from "./img/icons8-circled-play-50.png";
import pauseImg from "./img/icons8-pause-button-50.png";


class PlayPause extends React.Component {
    constructor() {
        super();
        this.state = {
            img: playImg
        }
        this.toggleImg = this.toggleImg.bind(this);
    }

    toggleImg() {
        this.setState((prevState) => {
            if (prevState.img === playImg) {
                return {
                    img: pauseImg
                }   
            }
            else {
                return {
                    img: playImg
                }
            }
        })
    }
    render() {
        return (
            <img alt="Play/pause-button" src={this.state.img} onClick={this.toggleImg}></img>
        )
    }
}

export default PlayPause;