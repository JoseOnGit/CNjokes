import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

import JokeCard from './JokeCard';

const CHUCK_API = 'https://api.chucknorris.io/jokes/search?query=';

class JokeNavbarSearch extends Component {
  constructor() {
    super();

    this.state = {
      searchedJokes: [],
    };
  }

  getSearchedJokes = (query) => {
    return fetch(`${CHUCK_API}${query}`)
          .then(response => response.json())
          .then(({ result }) => {
            const results = result.splice(0, 25);
            this.setState({searchedJokes: results});
          })
  }

  handleSearchChange = (event) => {
    const searchedString = event.target.value || {};

    if (searchedString.length >= 3) {
      this.getSearchedJokes(searchedString)
    }
    else {
      this.setState({ searchedJokes: [] })
    }
  }

  render() {
const { searchedJokes } = this.state;

    return (
      <Form>
        <Input type="text" onChange={this.handleSearchChange}/>
        {
          searchedJokes.map(({value, id}) => <JokeCard joke={value} key={id}/>)
        }
      </Form>
    )
  }
}

export default JokeNavbarSearch;
