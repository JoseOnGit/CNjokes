import React, { Component } from 'react';

class CountInput extends Component {
  render() {
    const { count, max, onChangeHandler } = this.props;
    return (
      <input
        type="number"
        min="1"
        value={count}
        onChange={onChangeHandler}
        max={max ? max : null}
      />
    );
  }
}

export default CountInput;
