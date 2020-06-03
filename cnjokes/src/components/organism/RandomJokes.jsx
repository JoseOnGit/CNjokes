import React, { Component } from 'react';
import Card from '../molecules/Card';
import JokesWrapper from '../atoms/JokesWrapper';
import ContentWrapper from '../atoms/ContentWrapper';
import NumberSetter from '../molecules/NumberSetter';
import { CHUCK_API, ALL_JOKES_QUERY } from '../../GlobalVariables';

class RandomJokes extends Component {
  constructor() {
    super();

    this.state = {
      error: null,
      isLoading: true,
      countOfJokes: 1,
      responseData: [],
    };
  }

  getJokes = () => {
    fetch(`${CHUCK_API}${ALL_JOKES_QUERY}`)
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

  componentDidMount() {
    this.getJokes();
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

  renderData = () => {
    const { error, isLoading } = this.state;

    if (error) {
      const { message } = error;
      console.log(message);
      return <div>Error: {message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    const splicedData = this.spliceJokes();

    return (
      <JokesWrapper>
        {splicedData.map(({ id, value }) => {
          return <Card joke={value} key={id} />;
        })}
      </JokesWrapper>
    );
  };

  render() {
    const { countOfJokes, responseData } = this.state;

    const jokesLenght = Array.from(responseData).length;

    return (
      <ContentWrapper>
        <NumberSetter
          count={countOfJokes}
          max={jokesLenght}
          onChangeHandler={this.handleInputChanged}
        />
        {this.renderData()}
      </ContentWrapper>
    );
  }
}

export default RandomJokes;
