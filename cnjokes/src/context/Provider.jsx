import React, { Component } from 'react';

import GlobalJokesContext from './GlobalJokesContext';

import { ALL_JOKES_QUERY } from '../GlobalVariables';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      countOfJokes: 1,
      responseData: [],
    };
  }

  componentDidMount() {
    this.getJokes();
  }

  getJokes = () => {
    fetch(ALL_JOKES_QUERY)
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

  setCountOfJokes = (value) => {
    this.setState({
      countOfJokes: value,
    });
  };

  render() {
    return (
      <GlobalJokesContext.Provider
        value={{
          state: this.state,
          setCountOfJokes: this.setCountOfJokes,
        }}
      >
        {this.props.children}
      </GlobalJokesContext.Provider>
    );
  }
}

export default Provider;
