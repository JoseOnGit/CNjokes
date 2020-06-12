import React, { useState, useEffect } from 'react';

import JokeCategorySelect from '../components/JokeCategorySelect';
import JokeCounter from '../components/JokeCounter';
import JokeList from '../components/JokeList';
import {
  CHUCK_API,
  RANDOM_JOKE_QUERY,
  CATEGORIES_QUERY,
} from '../GlobalVariables';

function MainPage() {
  const [jokeList, setJokeList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Any');
  const [jokeCount, setJokeCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const apiBaseGet = (query) => fetch(`${CHUCK_API}${query}`);

  const getJokes = async () => {
    const callJokeApi = () =>
      apiBaseGet(`${RANDOM_JOKE_QUERY}${categoryQuery}`);

    const getJoke = async () => {
      return await callJokeApi()
        .then((response) => response.json())
        .then(({ value }) => value);
    };

    const categoryQuery =
      selectedCategory === 'Any' ? '' : `?category=${selectedCategory}`;

    setIsLoading(true);
    const tempJokeList = Array.from(new Array(jokeCount), () => getJoke());

    const fillJokeList = (arrayOfData) => {
      setJokeList(arrayOfData);
      setIsLoading(false);
    };

    Promise.all(tempJokeList).then(fillJokeList);
  };

  const getCategories = () => {
    apiBaseGet(CATEGORIES_QUERY)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    getJokes();
    getCategories();
  }, []);

  const handleCategoryChange = (event) => {
    const { value } = event.target || {};
    setSelectedCategory(value);
  };

  const handleJokeCountChange = (event) => {
    const { value } = event.target || {};
    setJokeCount(parseInt(value));
  };

  return (
    <div className="chuck-wrap">
      <div className="chuck-header" />
      <JokeList jokeList={jokeList} isLoading={isLoading} />
      <button onClick={getJokes}>Get a random joke</button>
      <JokeCategorySelect
        categories={categories}
        handleCategoryChange={handleCategoryChange}
      />
      <JokeCounter handleJokeCountChange={handleJokeCountChange} />
    </div>
  );
}

export default MainPage;
