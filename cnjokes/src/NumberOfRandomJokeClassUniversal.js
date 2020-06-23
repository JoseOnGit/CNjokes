import React from 'react';
import Joke from './common/Joke'
import Button from './common/Button'
import NumberInput from './common/NumberInput'
import CategoriesDropdown from './common/CategoriesDropdown';

class NumberOfRandomJokeClass extends React.Component {
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
        this.fetchJoke('https://api.chucknorris.io/jokes/random');
    }

    fetchJoke(endpoint) {
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

    setCategory(category) {
        if(category === "random" || category === "") {
            return 'https://api.chucknorris.io/jokes/random';
        } else {
            return 'https://api.chucknorris.io/jokes/random?category=' + category;
        }
    }

    clickRandomJokeHandler = (event) => {
        const {amountOfRandomJokes, category} = this.state;
        this.setState({
            randomJokes: [],
        })
        for(let i=0; i<amountOfRandomJokes; i++) {
            this.fetchJoke(this.setCategory(category));
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

    pickCategoryHandler(value){
        this.setState({
            amountOfRandomJokes: 1,
            randomJokes: [],
            category: value,
        })
        this.fetchJoke(this.setCategory(value));
    }


    render() {
        const {doesHaveNumber, doesHaveCategories} = this.props;
        const {amountOfRandomJokes, randomJokes, category} = this.state;

        const buttonCategory = category ? category : 'random';
        const esSuffix = amountOfRandomJokes === 1 ? '' : 's';  
        const buttonText = 'Get ' + amountOfRandomJokes  + ' ' + buttonCategory + ' joke' + esSuffix;


        const showAllJokes = randomJokes.map(
            (joke, index) => <Joke text={joke} key={index} />
        );
        const showCategories = doesHaveCategories === "true" && 
            <CategoriesDropdown value={amountOfRandomJokes} onChange={this.pickCategoryHandler}/>;
        const showNumberInput = doesHaveNumber === "true" && 
            <NumberInput value={amountOfRandomJokes} onChange={this.inputRandomJokeHandler}/>;


        return (
            <div className="random-joke-box">
                <div className="container">
                    {showAllJokes}
                </div>
                {showCategories}
                {showNumberInput}
                <Button text={buttonText} handleClick={this.clickRandomJokeHandler} />
            </div>       
        )
        
    }
}
export default NumberOfRandomJokeClass;