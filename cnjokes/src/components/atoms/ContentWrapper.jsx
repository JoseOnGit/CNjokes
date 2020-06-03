import React, { Component } from 'react';
import '../../App.css';

class ContentWrapper extends Component {
  render() {
    const { children } = this.props;
    return <div className="content">{children}</div>;
  }
}

export default ContentWrapper;
