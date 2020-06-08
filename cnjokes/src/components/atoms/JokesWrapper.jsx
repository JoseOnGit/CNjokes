import React, { Component } from 'react';

import '../../app.css';

class JokesWrapper extends Component {
  render() {
    const { children } = this.props;

    return <div className="jokes">{children}</div>;
  }
}

export default JokesWrapper;
