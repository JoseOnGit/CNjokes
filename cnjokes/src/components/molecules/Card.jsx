import React from 'react';

import JokeWrapper from '../atoms/JokeWrapper';
import JokeText from '../atoms/JokeText';

import '../../app.css';

const Card = ({ id, joke }) => (
  <JokeWrapper id={id}>
    <JokeText joke={joke} />
  </JokeWrapper>
);

export default Card;
