import React from 'react';
import Container from './common/Container';
import NumberOfRandomJokeUniversal from './NumberOfRandomJokeUniversal'
import Chuck from './common/Chuck';

function RandomJokeModule() {
  return (
    <Container className="container-random-joke">
      <Chuck /> 
      <NumberOfRandomJokeUniversal />
    </Container>
  )
}
export default RandomJokeModule;
