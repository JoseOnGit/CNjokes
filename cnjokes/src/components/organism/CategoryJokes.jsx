import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class CategoryJokes extends Component {
  constructor() {
    super();

    this.state = {
      countOfJokes: 1,
    };
  }

  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    const { countOfJokes: prevCountOfJokes } = prevState || {};
    const { selectedCategory: prevSelectedCategory } = prevProps || {};

    const { countOfJokes } = this.state;
    const { fetchJokes, selectedCategory, setJokes } = this.props;

    const isCurrentCategorySame = prevSelectedCategory !== selectedCategory;
    const isCurrentCountSame = prevCountOfJokes !== countOfJokes;
    const isCountHigherThatOne = countOfJokes > 1;

    if (isCurrentCategorySame) {
      this.setState({ countOfJokes: 1 });
      setJokes([]);
      fetchJokes(selectedCategory);
    } else if (isCurrentCountSame && isCountHigherThatOne) {
      fetchJokes(selectedCategory);
    }
  }

  spliceJokes = () => {
    const { responseData, countOfJokes } = this.state;

    return responseData.splice(0, countOfJokes);
  };

  handleInputChanged = ({ target }) => {
    const { value } = target || {};

    this.setState({ countOfJokes: value });
  };

  handleDropdownChanged = ({ target }) => {
    const { value } = target || {};

    this.props.setCategory(value);
  };

  removeDuplicates(originalArray) {
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
  }

  renderData = () => {
    const { jokesError, jokesAreLoading, jokes } = this.props;

    if (jokesError) {
      const { message } = jokesError;
      console.error(message);

      return <div>Error: {message}</div>;
    }
    if (jokesAreLoading) {
      return <div>Loading...</div>;
    }

    const filteredArray = this.removeDuplicates(jokes);

    return (
      <JokesWrapper>
        {filteredArray &&
          filteredArray.map(({ id, value }) => <Card joke={value} key={id} />)}
      </JokesWrapper>
    );
  };

  render() {
    const { countOfJokes } = this.state;

    return (
      <ContentWrapper>
        <div>
          <NumberSetter
            count={countOfJokes}
            onChangeHandler={this.handleInputChanged}
          />
          <Dropdown
            selectedValue={this.props.selectedCategory}
            onChangeHandler={this.handleDropdownChanged}
            data={this.props.categories}
          />
        </div>
        {this.renderData()}
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: getCategories(state),
    selectedCategory: getSelectedCategory(state),
    jokes: getJokes(state),
    jokesAreLoading: getJokesLoading(state),
    jokesError: getJokesError(state),
  };
};

export default connect(mapStateToProps, {
  fetchCategories: () => fetchCategoriesFromAPI(),
  fetchJokes: (selectedCategory) => getJokesFromCategory(selectedCategory),
  setCategory: (category) => setCategory(category),
  setJokes: (jokes) => setJokes(jokes),
})(CategoryJokes);
