import React, { Component } from 'react';

import { JokeCategorySelect } from '../Components/JokeCategorySelect';
import { JokeCounter } from '../Components/JokeCounter';
import { JokeCard } from '../Components/JokeCard';

const CHUCK_API = 'https://api.chucknorris.io/';
const RANDOM_JOKE_QUERY = 'jokes/random';
const CATEGORIES_QUERY = 'jokes/categories';

export class JokePage extends Component {
    constructor() {
        super();

        this.state = {
            jokeList: [],
            categories: [],
            selectedCategory: 'Any',
            jokeCount: 1,
        };
    }

    apiBaseGet = (query) => {
        return fetch(`${CHUCK_API}${query}`)
                .then(response => response.json())
    }

    getJokes = () => {
        const { selectedCategory, jokeCount } = this.state || {};
        const categoryQuery = (selectedCategory === 'Any') ? '' : `?category=${selectedCategory}`;
        
        this.setState({jokeList: []})

        let i;
        for (i = 0; i< jokeCount; i++) {
            this.apiBaseGet(`${RANDOM_JOKE_QUERY}${categoryQuery}`)
            .then(data => {
                const { jokeList } = this.state || {}; 
                this.setState({jokeList: jokeList.concat(data.value)})
            });
        }
    };

    getCategories = () => {
        this.apiBaseGet(CATEGORIES_QUERY)
            .then(data => this.setState({categories: data}))
    };

    componentDidMount() {
        this.getJokes();
        this.getCategories();
    }

    handleCategoryChange = event => {
        const { value } = event.target || {};
        this.setState({
            selectedCategory: value,
        })
    }

    handleJokeCountChange = event => {
        const { value } = event.target || {};
        this.setState({
            jokeCount: value,
        })
    }

    render() {
        const { jokeList } = this.state;

        return (
            <div className="chuckWrap">
                <div className="chuckHeader" />
                {
                    jokeList.map((joke) => <JokeCard joke={joke}/>)
                }
                <button onClick={this.getJokes}>Get a random joke</button>
                <JokeCategorySelect categories={this.state.categories} handleCategoryChange={this.handleCategoryChange}/>
                <JokeCounter handleJokeCountChange={this.handleJokeCountChange}/>
            </div>
        );
    }
}
