import React from 'react';

import JokeCard from './JokeCard';

function JokeList(props) {
  const {jokeList} = props || {};
  return (
    <>
      {
        jokeList.map((joke) => <JokeCard joke={joke}/>)
      }
    </>
  )

}

export default JokeList