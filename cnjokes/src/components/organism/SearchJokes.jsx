import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../molecules/Card';
import ContentWrapper from '../atoms/ContentWrapper';
import JokesWrapper from '../atoms/JokesWrapper';
import SearchInput from '../atoms/SearchInput';

import { fetchJokes } from '../../redux/searchJokes/actions';

import {
  getJokes,
  getJokesLoading,
  getJokesError,
} from '../../redux/searchJokes/selectors';

const SearchJokes = () => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const dispatch = useDispatch();

  const jokes = useSelector(getJokes);
  const isLoading = useSelector(getJokesLoading);
  const error = useSelector(getJokesError);

  useEffect(() => {
    if (searchPhrase.length >= 3) dispatch(fetchJokes(searchPhrase));
  }, [searchPhrase, dispatch]);

  const handleInputChanged = ({ target }) => {
    const { value } = target;
    setSearchPhrase(value);
  };

  const spliceJokes = (jokes) => jokes.splice(0, 25);

  const renderData = () => {
    if (error) {
      const { message } = error;
      console.error(message);
      return <div>Error: {message}</div>;
    }

    if (isLoading && searchPhrase.length >= 3) return <div>Loading...</div>;

    const splicedJokes = spliceJokes(jokes);

    return (
      <JokesWrapper>
        {jokes &&
          splicedJokes.map(({ id, value }) => <Card joke={value} key={id} />)}
      </JokesWrapper>
    );
  };

  return (
    <>
      <h2 className="text">You can also search for a joke </h2>
      <ContentWrapper>
        <SearchInput
          searchPhrase={searchPhrase}
          onChangeHandler={handleInputChanged}
        />
        {renderData()}
      </ContentWrapper>
    </>
  );
};

export default SearchJokes;
