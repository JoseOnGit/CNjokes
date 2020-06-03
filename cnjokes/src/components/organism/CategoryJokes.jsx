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
      responseDataCategories: [],
      responseDataJokes: [],
      selectedCategory: '',
    };
  }

  getCategories = () => {
    fetch(`${CHUCK_API}${JOKES_CATEGORIES}`)
      .then((response) => response.json())
      .then(
        (data) => {
          const { responseDataCategories } = this.state;
          this.setState({
            isLoading: false,
            responseDataCategories: ['all', ...data],
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
    console.log('getJokes selectedCatgory: ', selectedCategory);
    const url =
      selectedCategory === undefined || selectedCategory === 'all'
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
    const { selectedCategory, countOfJokes } = this.state;
    if (prevState.selectedCategory !== selectedCategory) {
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
    const { value } = target;
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

    originalArray.map((x) =>
      filteredArray.filter((a) => a.id === x.id).length > 0
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
        {filteredArray.map(({ id, value }) => {
          return <Card joke={value} key={id} />;
        })}
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
