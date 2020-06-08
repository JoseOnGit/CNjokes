import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../molecules/Card';
import ContentWrapper from '../atoms/ContentWrapper';
import JokesWrapper from '../atoms/JokesWrapper';
import SearchInput from '../atoms/SearchInput';

import { SEARCH_JOKES_QUERY } from '../../GlobalVariables';
import * as actionTypes from '../../redux/actions';

class SearchJokes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // error: null,
      // isLoading: true,
      searchPhrase: '',
      // responseData: [],
    };
  }

  getJokes = () => {
    const { searchPhrase } = this.state;
    fetch(`${SEARCH_JOKES_QUERY}${searchPhrase}`)
      .then((response) => response.json())
      .then(
        ({ result }) => {
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
      console.error(message);
      return <div>Error: {message}</div>;
    }

    if (isLoading && searchPhrase.length >= 3) return <div>Loading...</div>;

    const splicedJokes = this.spliceJokes(responseData);

    return (
      <JokesWrapper>
        {responseData &&
          splicedJokes.map(({ id, value }) => <Card joke={value} key={id} />)}
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

const mapStateToProps = (state) => {
  return {
    jokes: state.searchedJokes,
    loading: state.isLoading,
    err: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: () => dispatch({ type: actionTypes.FETCH_SEARCHED_JOKES }),
    onSuccessfulFetch: (jokes) =>
      dispatch({ type: actionTypes.FETCH_SEARCHED_JOKES_SUCCESS, data: jokes }),
    onFailureFetch: (error) =>
      dispatch({
        type: actionTypes.FETCH_SEARCHED_JOKES_FAILURE,
        error: error,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchJokes);
