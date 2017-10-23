import React, { Component } from 'react';
import me from './me.png'
import './App.css';
import Bio from './Bio.js';

const bio = "a skeptical, libertarian, day-dreamin', cheese-eatin', scifi-watchin', TV-obsessin', guitar-plinkin', pet-spoilin', python-codin' engineer <a href=\"https://twitter.com/OReillyMedia\">@OReillyMedia</a>"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bio
          portrait={me}
          name="katy lavallee"
          bio="a girl has no bio"
        />
      </div>
    );
  }
}

export default App;
