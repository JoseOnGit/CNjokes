import React, { useState, useEffect, useCallback } from 'react';

import JokeCategorySelect from '../components/category_select/JokeCategorySelect';
import JokeCounter from '../components/joke_counter/JokeCounter';
import JokeList from '../components/JokeList';
import {
  CHUCK_API,
  RANDOM_JOKE_QUERY,
  CATEGORIES_QUERY,
} from '../GlobalVariables';

const MainPage = () => {
  const [jokeList, setJokeList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [jokeCount, setJokeCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const apiBaseGet = (query) => fetch(`${CHUCK_API}${query}`);

  const getJokes = useCallback(() => {
    const callJokeApi = () =>
      apiBaseGet(`${RANDOM_JOKE_QUERY}${categoryQuery}`);

    const getJoke = async () => {
      return await callJokeApi().then((response) => response.json());
    };

    const categoryQuery =
      selectedCategory === '' ? '' : `?category=${selectedCategory}`;

    setIsLoading(true);
    const tempJokeList = Array.from(new Array(jokeCount), () => getJoke());

    const fillJokeList = (arrayOfData) => {
      setJokeList(arrayOfData);
      setIsLoading(false);
    };

    Promise.all(tempJokeList).then(fillJokeList);
  }, [jokeCount, selectedCategory]);

  const getCategories = useCallback(() => {
    apiBaseGet(CATEGORIES_QUERY)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    getJokes();
    getCategories();
  }, [getCategories, getJokes]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleJokeCountChange = (count) => {
    setJokeCount(parseInt(count));
  };

  return (
    <div className="joke-display-body">
      <span className="category-select">
        <JokeCategorySelect
          categories={categories}
          handleCategoryChange={handleCategoryChange}
        />
      </span>
      <span className="joke-part">
        <div className="chuck-header" />
        <JokeList jokeList={jokeList} isLoading={isLoading} />
      </span>
      <span className="counter-and-button">
        <div className="joke-counter">
          <JokeCounter handleJokeCountChange={handleJokeCountChange} />
        </div>
        <div>
          <button className="get-jokes-button" onClick={getJokes}>
            Get new jokes
          </button>
        </div>
      </span>
    </div>
  );
};

export default MainPage;
