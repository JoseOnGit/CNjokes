import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchJoke } from '../../redux/randomJoke/actions';

import JokesWrapper from '../atoms/JokesWrapper';
import ContentWrapper from '../atoms/ContentWrapper';

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
      <div className="random-joke-wrapper">
        <p className="random-joke-text">{joke && joke.value}</p>
      </div>
    );
  };

  return (
    <div className="random-joke-content">
      <h1 className="random-joke-title">Random Joke</h1>
      {renderData()}
      <button className="new-joke-button" onClick={() => onClickHandler()}>
        New Joke!
      </button>
    </div>
  );
};

export default RandomJoke;
