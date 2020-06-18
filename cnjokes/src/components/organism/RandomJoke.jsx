import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchJoke } from '../../redux/randomJoke/actions';

import Button from '../atoms/Button';
import RandomJokeWrapper from '../atoms/RandomJokeWrapper';
import RandomJokeText from '../atoms/RandomJokeText';
import RandomJokeContentWrapper from '../atoms/RandomJokeContentWrapper';

import '../../app.css';

import {
  getJoke,
  getJokeLoading,
  getJokeError,
} from '../../redux/randomJoke/selectors';

const RandomJoke = () => {
  const joke = useSelector(getJoke);
  const isLoading = useSelector(getJokeLoading);
  const error = useSelector(getJokeError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJoke());
  }, []);

  const onClickHandler = () => {
    dispatch(fetchJoke());
  };

  const renderData = () => {
    if (error) {
      const { message } = error;
      console.error(message);

      return <div>Error: {message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <RandomJokeWrapper>
        <RandomJokeText joke={joke && joke.value} />
      </RandomJokeWrapper>
    );
  };

  return (
    <RandomJokeContentWrapper>
      <h1 className="random-joke-title">Random Chuck Norris Joke</h1>
      {renderData()}
      <Button text="New Joke!" onClickHandler={() => onClickHandler()} />
    </RandomJokeContentWrapper>
  );
};

export default RandomJoke;
