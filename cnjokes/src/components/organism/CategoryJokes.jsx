import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../molecules/Card';
import JokesWrapper from '../atoms/JokesWrapper';
import ContentWrapper from '../atoms/ContentWrapper';
import NumberSetter from '../molecules/NumberSetter';
import Dropdown from '../molecules/Dropdown';

import {
  getCategories as fetchCategoriesFromAPI,
  getJokesFromCategory,
  setCategory,
  setJokes,
} from '../../redux/categoryJokes/actions';

import {
  getCategories,
  getSelectedCategory,
  getJokes,
  getJokesError,
  getJokesLoading,
} from '../../redux/categoryJokes/selectors';

const CategoryJokes = () => {
  const [countOfJokes, setCountOfJokes] = useState(1);

  const categories = useSelector(getCategories);
  const selectedCategory = useSelector(getSelectedCategory);
  const jokes = useSelector(getJokes);
  const jokesAreLoading = useSelector(getJokesLoading);
  const jokesError = useSelector(getJokesError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesFromAPI());
  }, [dispatch]);

  useEffect(() => {
    setCountOfJokes(1);
    dispatch(setJokes([]));
    selectedCategory && dispatch(getJokesFromCategory(selectedCategory));
  }, [selectedCategory, dispatch]);

  useEffect(() => {
    if (countOfJokes > 1) dispatch(getJokesFromCategory(selectedCategory));
  }, [countOfJokes, dispatch]);

  const handleInputChanged = ({ target }) => {
    const { value } = target || {};

    setCountOfJokes(value);
  };

  const handleDropdownChanged = ({ target }) => {
    const { value } = target || {};

    dispatch(setCategory(value));
  };

  const removeDuplicates = (originalArray) => {
    // const filteredArray = [...new Set(originalArray)];
    // const filteredArray = originalArray.filter(
    //   (item, index) => originalArray.indexOf(item) === index,
    // );
    // TODO: [ ...new  Set() ] // https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
    const filteredArray = [];

    originalArray &&
      originalArray.map((x) =>
        filteredArray.filter((a) => a.id === x.id).length > 0
          ? null
          : filteredArray.push(x),
      );
    return filteredArray;
  };

  const renderData = () => {
    if (jokesError) {
      const { message } = jokesError;
      console.error(message);

      return <div>Error: {message}</div>;
    }
    if (jokesAreLoading) {
      return <div>Loading...</div>;
    }

    const filteredArray = removeDuplicates(jokes);

    return (
      <JokesWrapper>
        {filteredArray &&
          filteredArray.map(({ id, value }) => <Card joke={value} key={id} />)}
      </JokesWrapper>
    );
  };

  return (
    <ContentWrapper>
      <h2 className="text">You can choose from categories</h2>
      <div>
        <NumberSetter
          count={countOfJokes}
          onChangeHandler={handleInputChanged}
        />
        <Dropdown
          selectedValue={selectedCategory}
          onChangeHandler={handleDropdownChanged}
          data={categories}
        />
      </div>
      {renderData()}
    </ContentWrapper>
  );
};

export default CategoryJokes;
