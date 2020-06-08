import React, { Component } from 'react';

import CountInput from '../atoms/CountInput';

class NumberSetter extends Component {
  render() {
    const { count, max, onChangeHandler } = this.props;

    return (
      <div className="numberSetter">
        <span className="text">Set number of jokes: </span>
        <CountInput count={count} max={max} onChangeHandler={onChangeHandler} />
      </div>
    );
  }
}

export default NumberSetter;
