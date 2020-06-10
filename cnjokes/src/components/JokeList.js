import React from 'react';

import JokeCard from './JokeCard';

function JokeList(props) {
  const { jokeList, isLoading } = props || {};

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <ul>
      {jokeList.map((joke) => (
        <li>
          <JokeCard joke={joke} />
        </li>
      ))}
    </ul>
  );
}

export default JokeList;
