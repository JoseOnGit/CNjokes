import React, { useState, useEffect } from 'react';

import JokeCategorySelect from '../components/category_select/JokeCategorySelect';
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
  const [selectedCategory, setSelectedCategory] = useState('');
  const [jokeCount, setJokeCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const apiBaseGet = (query) => fetch(`${CHUCK_API}${query}`);

  const getJokes = async () => {
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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleJokeCountChange = (event) => {
    const { value } = event.target || {};
    setJokeCount(parseInt(value));
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
        <div>
          <JokeCounter handleJokeCountChange={handleJokeCountChange} />
        </div>
        <div>
          <button onClick={getJokes}>Get a new jokes</button>
        </div>
      </span>
    </div>
  );
}

export default MainPage;
