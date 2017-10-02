import React, { Component } from 'react';
import me from './me.png'
import './App.css';

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

class Bio extends Component {
  render() {
    return (
      <div classname="App-bio">
        <header className="App-header">
          <img src={this.props.portrait} className="App-logo" alt={`portrait for ${this.props.name}`} />
          <h1 className="App-title">{this.props.name}</h1>
        </header>
        <p className="App-intro">
          {this.props.bio}
        </p>
      </div>
    );
  }
}

export default App;
