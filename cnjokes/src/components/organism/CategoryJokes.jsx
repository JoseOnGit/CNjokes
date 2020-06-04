import React, { Component } from 'react';
import Card from '../molecules/Card';
import JokesWrapper from '../atoms/JokesWrapper';
import ContentWrapper from '../atoms/ContentWrapper';
import NumberSetter from '../molecules/NumberSetter';
import Dropdown from '../molecules/Dropdown';

import {
  CHUCK_API,
  JOKES_CATEGORIES,
  RANDOM_JOKES_FROM_CATEGORY,
  RANDOM_JOKE_QUERY,
} from '../../GlobalVariables';

class CategoryJokes extends Component {
  constructor() {
    super();

    this.state = {
      error: null,
      isLoading: true,
      countOfJokes: 1,
      responseDataCategories: ['all'],
      responseDataJokes: [],
      selectedCategory: '',
    };
  }

  getCategories = () => {
    // TODO: Set loadling to truei   
    fetch(JOKES_CATEGORIES)
      .then((response) => response.json())
      .then(
        (data) => {
          const { responseDataCategories } = this.state;
          const updatedResponseDataCategories = responseDataCategories.concat(data);

          this.setState({
            isLoading: false,
            responseDataCategories: updatedResponseDataCategories,
            selectedCategory: responseDataCategories[0],
          });
        },
        (error) => {
          this.setState({
            isLoading: false,
            error,
          });
        },
      );
  };

  getJokesFromCategory = () => {
    const { selectedCategory } = this.state;

    const url =
      selectedCategory === 'all'
        ? `${CHUCK_API}${RANDOM_JOKE_QUERY}`
        : `${CHUCK_API}${RANDOM_JOKES_FROM_CATEGORY}${selectedCategory}`;

    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          const { responseDataJokes } = this.state;
          this.setState({
            isLoading: false,
            responseDataJokes: [...responseDataJokes, data],
          });
        },
        (error) => {
          this.setState({
            isLoading: false,
            error,
          });
        },
      );
  };

  componentDidMount() {
    this.getCategories();
  }

componentDidUpdate(prevProps, prevState) {
    const {  selectedCategory: prevSelectedCategory } = prevState || {};
    const { selectedCategory, countOfJokes } = this.state;

    if (prevSelectedCategory !== selectedCategory) {
      this.setState({ responseDataJokes: [], countOfJokes: 1 });
      this.getJokesFromCategory();
    } else if (prevState.countOfJokes !== countOfJokes && countOfJokes > 1) {
      this.getJokesFromCategory();
    }
  }

  spliceJokes = () => {
    const { responseData, countOfJokes } = this.state;

    return responseData.splice(0, countOfJokes);
  };

  handleInputChanged = ({ target }) => {
    const { value } = target || {};

    this.setState({
      countOfJokes: value,
    });
  };

  handleDropdownChanged = ({ target }) => {
    const { value } = target;

    this.setState({ selectedCategory: value });
  };

  removeDuplicates(originalArray) {
    const filteredArray = [];
    // TODO: [ ...new  Set() ] // https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
    originalArray && originalArray.map(({ id: xid }) =>
      filteredArray.filter(({ id }) => id === xid).length > 0
        ? null
        : filteredArray.push(x),
    );
    return filteredArray;
  }

  renderData = () => {
    const { error, isLoading, responseDataJokes } = this.state;

    if (error) {
      const { message } = error;
      console.log(message);

      return <div>Error: {message}</div>;
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }

    const filteredArray = this.removeDuplicates(responseDataJokes, 'id');

    return (
      <JokesWrapper>
        {filteredArray && filteredArray.map(({ id, value }) => <Card joke={value} key={id} /> )}
      </JokesWrapper>
    );
  };

  render() {
    const {
      countOfJokes,
      responseDataCategories,
      selectedCategory,
    } = this.state;

    return (
      <ContentWrapper>
        <div>
          <NumberSetter
            count={countOfJokes}
            onChangeHandler={this.handleInputChanged}
          />
          <Dropdown
            selectedValue={selectedCategory}
            onChangeHandler={this.handleDropdownChanged}
            data={responseDataCategories}
          />
        </div>
        {this.renderData()}
      </ContentWrapper>
    );
  }
}

export default CategoryJokes;
