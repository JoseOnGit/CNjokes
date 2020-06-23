import React from 'react';
import Joke from './common/Joke'
import Button from './common/Button'

class RandomJokeClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomJokeText: '',
        }
        this.clickRandomJokeHandler = this.clickRandomJokeHandler.bind(this);
    }   

    componentDidMount() {
        this.fetchIt();
    }

    clickRandomJokeHandler(event) {
        this.fetchIt();
    }

    fetchIt() {
        const endpoint = 'https://api.chucknorris.io/jokes/random';
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                console.log('%c⧭ data.value ', 'color: #f279ca', data.value);
                this.setState({
                    randomJokeText: data.value,
                })
            })
    }

    render() {
        return (
            <div className="random-joke-box">
                <Joke text={this.state.randomJokeText} />
                <Button text='Get random joke' handleClick={this.clickRandomJokeHandler} />
            </div>       
        )
    }
}
export default RandomJokeClass;