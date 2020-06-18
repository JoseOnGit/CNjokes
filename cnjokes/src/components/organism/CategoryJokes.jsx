import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../molecules/Card';
import JokesWrapper from '../atoms/JokesWrapper';
import Label from '../atoms/Label';
import LabelsWrapper from '../atoms/LabelsWrapper';
import JokesSettersWrapper from '../atoms/JokesSettersWrapper';
import CategoryContentWrapper from '../atoms/CategoryContentWrapper';
import InputsWrapper from '../atoms/InputsWrapper';
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
    const uniqueArray = [
      ...new Set(originalArray.map((object) => JSON.stringify(object))),
    ].map((objectInString) => JSON.parse(objectInString));

    return uniqueArray;
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
    <CategoryContentWrapper>
      <h2 className="text">You can choose from categories</h2>
      <JokesSettersWrapper>
        <LabelsWrapper>
          <Label text="Number of jokes you would like to see: " />
          <Label text="Choose category: " />
        </LabelsWrapper>
        <InputsWrapper>
          <NumberSetter
            count={countOfJokes}
            onChangeHandler={handleInputChanged}
          />
          <Dropdown
            selectedValue={selectedCategory}
            onChangeHandler={handleDropdownChanged}
            data={categories}
          />
        </InputsWrapper>
      </JokesSettersWrapper>
      {renderData()}
    </CategoryContentWrapper>
  );
};

export default CategoryJokes;
