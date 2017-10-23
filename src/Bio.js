import React, { Component } from 'react';

class Bio extends Component {
  render() {
    return (
      <div className="App-bio">
        <header className="App-header">
          <img src={this.props.portrait} className="App-logo" alt={`portrait for ${this.props.name}`} />
          <h1 className="App-title">{this.props.name}</h1>
        </header>
        <div className="App-intro">
          <ul>
            {this.makeBullets()}
          </ul>
        </div>
      </div>
    );
  }

  makeBullets() {
    return this.props.bullets.map((bullet, index) => {
        return <li key={index}>{bullet}</li>;
    });
  }
}

export default Bio;
