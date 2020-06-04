import React, { Component } from 'react';

class CountInput extends Component {
  render() {
const { count, max, onChangeHandler } = this.props;
    const maxValue = max ? max : null;
    return (
      <input
        type="number"
        min="1"
        value={count}
        onChange={onChangeHandler}
        max={maxValue}
      />
    );
  }
}

export default CountInput;
