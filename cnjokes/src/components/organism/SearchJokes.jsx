import React, { Component } from 'react';
import Card from '../molecules/Card';
import ContentWrapper from '../atoms/ContentWrapper';
import JokesWrapper from '../atoms/JokesWrapper';
import SearchInput from '../atoms/SearchInput';
import { CHUCK_API, SEARCH_JOKES_QUERY } from '../../GlobalVariables';

class SearchJokes extends Component {
  constructor() {
    super();

    this.state = {
      error: null,
      isLoading: true,
      searchPhrase: '',
      responseData: [],
    };
  }

  getJokes = () => {
    const { searchPhrase } = this.state;
    fetch(`${CHUCK_API}${SEARCH_JOKES_QUERY}${searchPhrase}`)
      .then((response) => response.json())
      .then(
        (data) => {
          const { result } = data;
          this.setState({
            isLoading: false,
            responseData: result,
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

  componentDidUpdate(prevProps, { searchPhrase }) {
    const { searchPhrase: currentSearchPhrase } = this.state;
    if (
      searchPhrase !== currentSearchPhrase &&
      currentSearchPhrase.length >= 3
    ) {
      this.getJokes();
    }
  }

  handleInputChanged = ({ target }) => {
    const { value } = target;
    this.setState({
      searchPhrase: value,
    });
  };

  spliceJokes = (jokes) => jokes.splice(0, 25);

  renderData = () => {
    const { error, isLoading, responseData, searchPhrase } = this.state;
    if (error) {
      const { message } = error;
      console.log(message);
      return <div>Error: {message}</div>;
    }

    if (isLoading && searchPhrase.length >= 3) return <div>Loading...</div>;

    let splicedJokes = [];
    if (responseData) splicedJokes = this.spliceJokes(responseData);

    return (
      <JokesWrapper>
        {responseData &&
          splicedJokes.map(({ id, value }) => {
            return <Card joke={value} key={id} />;
          })}
      </JokesWrapper>
    );
  };

  render() {
    const { searchPhrase } = this.state;

    return (
      <>
        <h2 className="text">You can also search for a joke </h2>
        <ContentWrapper>
          <SearchInput
            searchPhrase={searchPhrase}
            onChangeHandler={this.handleInputChanged}
          />
          {this.renderData()}
        </ContentWrapper>
      </>
    );
  }
}

export default SearchJokes;
