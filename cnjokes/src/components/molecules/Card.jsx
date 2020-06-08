import React, { Component } from 'react';

import JokeWrapper from '../atoms/JokeWrapper';
import JokeText from '../atoms/JokeText';

import '../../app.css';

class Card extends Component {
  render() {
    const { id, joke } = this.props;

    return (
      <JokeWrapper id={id}>
        <JokeText joke={joke} />
      </JokeWrapper>
    );
  }
}

export default Card;
