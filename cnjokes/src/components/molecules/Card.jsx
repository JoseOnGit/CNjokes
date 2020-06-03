import React, { Component } from 'react';
import '../../App.css';
import JokeWrapper from '../atoms/JokeWrapper';
import JokeText from '../atoms/JokeText';

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
