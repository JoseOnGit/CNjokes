import React from 'react';
import Joke from './common/Joke'
import Button from './common/Button'
import Input from './common/NumberInput'
import CategoriesDropdown from './common/CategoriesDropdown';

class NumberOfRandomJokeCategoryClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amountOfRandomJokes: 1,
            randomJokes: [],
            category: '',
        }
        
        this.clickRandomJokeHandler = this.clickRandomJokeHandler.bind(this);
        this.inputRandomJokeHandler = this.inputRandomJokeHandler.bind(this);
        this.pickCategoryHandler = this.pickCategoryHandler.bind(this);
    } 

    componentDidMount() {
        this.fetchIt();
    }
    componentDidUpdate() {
        
    }

    pickCategoryHandler(value){
        this.setState({
            category: value,
        })
    }

    clickRandomJokeHandler = (event) => {
        this.setState({
            randomJokes: [],
        })
        const multiple = this.state.amountOfRandomJokes;
        for(let i=0; i<multiple; i++) {
            this.fetchIt();
        }
    }

    inputRandomJokeHandler = (value) => {
        value = parseInt(value);
        if(Number.isInteger(value)) {
            this.setState({
                amountOfRandomJokes: value,
            })
        }
    }

    fetchIt() {
        const endpoint = 'https://api.chucknorris.io/jokes/random';
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                const allJokes = this.state.randomJokes;
                allJokes.push(data.value);
                this.setState({
                    randomJokes: allJokes,
                })
            });
    }

    render() {
        const amount = this.state.amountOfRandomJokes;
        const es = amount === 1 ? '' : 's';
        return (
            <div className="random-joke-box">
                {this.state.randomJokes.map(
                    (joke, index) => <Joke text={joke} key={index} />
                )}
                <CategoriesDropdown onChange={this.pickCategoryHandler}/>
                <Input 
                    value={amount} 
                    onChange={this.inputRandomJokeHandler}
                />
                <Button 
                    text={'Get ' + amount + ' random joke' + es} 
                    handleClick={this.clickRandomJokeHandler} 
                />
            </div>       
        )
    }
}
export default NumberOfRandomJokeCategoryClass;

                    