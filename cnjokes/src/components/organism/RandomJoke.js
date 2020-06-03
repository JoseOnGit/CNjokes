import React, { Component } from 'react';
import Card from '../molecules/Card';
import ContentWrapper from '../atoms/ContentWrapper';
import { CHUCK_API, RANDOM_JOKE_QUERY } from '../../GlobalVariables';

class RandomJoke extends Component {
  constructor() {
    super();

    this.state = {
      error: null,
      isLoading: true,
      joke: null,
    };
  }

  getRandomJoke = () => {
    fetch(`${CHUCK_API}${RANDOM_JOKE_QUERY}`)
      .then((response) => response.json())
      .then(
        (data) => {
          const { value } = data;
          this.setState({
            isLoading: false,
            joke: value,
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
    this.getRandomJoke();
  }

  renderData = () => {
    const { error, isLoading, joke } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Card joke={joke} />;
  };

  render() {
    return (
      <ContentWrapper>
        {this.renderData()}
        <button onClick={this.getRandomJoke}>Get a random joke</button>
      </ContentWrapper>
    );
  }
}

export default RandomJoke;
