import React, { Component } from 'react';

import '../../App.css';

class JokeWrapper extends Component {
  render() {
    const { id, children } = this.props;

    return (
      <div className="card" id={id}>
        {children}
      </div>
    );
  }
}

export default JokeWrapper;
