import React, { Component } from 'react';
// import logo from './logo.svg';
import me from './me.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={me} className="App-logo" alt="logo" />
          <h1 className="App-title">katy lavallee</h1>
        </header>
        <p className="App-intro">
          a skeptical, libertarian, day-dreamin', cheese-eatin', scifi-watchin', TV-obsessin', guitar-plinkin',
          pet-spoilin', python-codin' engineer <a href="https://twitter.com/OReillyMedia">@OReillyMedia</a>
        </p>
      </div>
    );
  }
}

export default App;
