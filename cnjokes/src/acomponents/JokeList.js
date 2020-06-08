import React from 'react';

import JokeCard from './JokeCard';

function JokeList(props) {
  const { jokeList, isLoading } = props || {};

  if (isLoading) {
    return <>Loading...</>
  }

  return (
    <>
      {
        jokeList.map((joke) => <JokeCard joke={joke}/>)
      }
    </>
  )

}

export default JokeList