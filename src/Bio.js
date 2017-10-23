import React, { Component } from 'react';

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

export default Bio;
