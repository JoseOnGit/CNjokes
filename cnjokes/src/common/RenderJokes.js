import React from 'react';
import Joke from './Joke';

function RenderJokes(props) {
  const jokes = [...props.jokes];
  return (
    jokes.map(
      (joke, index) => <Joke text={joke} key={index} /> 
    )
  )
}
export default RenderJokes;
