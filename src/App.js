import React, { Component } from 'react';
import { Howl, Howler } from 'howler';
import sog from './srcFile/jai.mp3';
import Prer from './Prer.js';

class App extends Component {
  SoundPlay() {
    const Sounds = new Howl({
      src: [sog]
    })
    Sounds.play()
  }
  render() {
    return (
      <div className="App">
        {this.SoundPlay()}
        <Prer/>
      </div>
    );
  }
}

export default App;
