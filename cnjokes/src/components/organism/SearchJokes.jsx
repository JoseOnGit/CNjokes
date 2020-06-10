import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../molecules/Card';
import ContentWrapper from '../atoms/ContentWrapper';
import JokesWrapper from '../atoms/JokesWrapper';
import SearchInput from '../atoms/SearchInput';

import { fetchJokes } from '../../redux/searchJokes/actions';

import {
  getJokes,
  getJokesLoading,
  getJokesError,
} from '../../redux/searchJokes/selectors';

class SearchJokes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchPhrase: '',
    };
  }

  componentDidUpdate(prevProps, { searchPhrase }) {
    const { searchPhrase: currentSearchPhrase } = this.state;

    if (
      searchPhrase !== currentSearchPhrase &&
      currentSearchPhrase.length >= 3
    ) {
      this.props.fetchJokes(currentSearchPhrase);
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
    const { searchPhrase } = this.state;
    const { jokes, isLoading, error } = this.props;

    if (error) {
      const { message } = error;
      console.error(message);
      return <div>Error: {message}</div>;
    }

    if (isLoading && searchPhrase.length >= 3) return <div>Loading...</div>;

    const splicedJokes = this.spliceJokes(jokes);

    return (
      <JokesWrapper>
        {jokes &&
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
    jokes: getJokes(state),
    isLoading: getJokesLoading(state),
    error: getJokesError(state),
  };
};

export default connect(mapStateToProps, {
  fetchJokes: (phrase) => fetchJokes(phrase),
})(SearchJokes);
