import React from 'react';

const JokeList = ({ jokeList, isLoading }) => {
  if (isLoading) {
    return <>Loading...</>;
  }

  return jokeList.map((joke) => {
    const { value, id } = joke;
    return <p key={id}>{value}</p>;
  });
};

export default JokeList;
