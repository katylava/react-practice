import React, { Component } from 'react';

class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulletsVisible: true,
    };
  }

  render() {
    return (
      <div className="App-bio">
        <header className="App-header" onClick={() => this.handleClick()}>
          <img
            src={this.props.portrait}
            className="App-logo"
            alt={`portrait for ${this.props.name}`}
          />
          <h1 className="App-title">{this.props.name}</h1>
        </header>
        <div className={this.makeBulletClasses()}>
          <ul>
            {this.makeBullets()}
          </ul>
        </div>
      </div>
    );
  }

  handleClick() {
    this.setState(Object.assign({}, this.state, {
      bulletsVisible: !this.state.bulletsVisible,
    }));
  }

  makeBullets() {
    return this.props.bullets.map(
      (bullet, index) => <li key={index}>{bullet}</li>
    );
  }

  makeBulletClasses() {
    let classes = ['App-intro'];

    if (!this.state.bulletsVisible) {
      classes.push('hidden');
    }

    return classes.join(' ');
  }
}

export default Bio;
