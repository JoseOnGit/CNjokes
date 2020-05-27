import React, {Component} from 'react';

const CHUCK_API = 'https://api.chucknorris.io/';
const RANDOM_JOKE_QUERY = 'jokes/random';

class RandomJoke extends Component {
    constructor() {
        super();

        this.state = {
            joke: null,
        };
    }

    getRandomJoke = () => {
        fetch(`${CHUCK_API}${RANDOM_JOKE_QUERY}`)
            .then(response => response.json())
            .then(data => this.setState({joke: data.value}))
    };


    componentDidMount() {
        this.getRandomJoke();
    }


    render() {
        const {joke} = this.state;

        return (
            <div className="chuckWrap">
                <div className="chuckHeader" />
                <button onClick={this.getRandomJoke}>Get a random joke</button>
                <div>{joke}</div>
            </div>
        );
    }
}

export default RandomJoke;
