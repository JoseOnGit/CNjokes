import React, { useState, useEffect } from 'react';
import RenderJokes from './common/RenderJokes';
import Button from './common/Button';
import NumberInput from './common/NumberInput'
import CategoriesDropdown from './common/CategoriesDropdown';
import Container from './common/Container';
import SearchJokes from './common/SearchJokes';

import shakeChuck from './common/shakeChuck';
import fetchSearchedJokes from './common/fetchedSearchedJokes';
import getRandomJokes from './common/fetchedRandomJokes';

function NumberOfRandomJokeUniversal(props) {
    const [randomJokes, setRandomJokes] = useState([]);
    const [amountOfRandomJokes, setAmountOfRandomJokes] = useState(1);
    const [category, setCategory] = useState('random');

    // get joke on first render
    useEffect(() => {
        if(!props.doesHaveCategories && !props.doesHaveNumber) {
            buttonHandler();
        }
    }, [])

    const buttonHandler = async () => {
        setRandomJokes(await getRandomJokes(amountOfRandomJokes,category));
        document.querySelector('.search').value = '';
        shakeChuck();
    }

    const selectNumberOfJokes = (inputValue) => {
        setAmountOfRandomJokes(parseInt(inputValue))
    }

    const selectCategory = (passedValue) => {
        setCategory(passedValue)
    }

    const handleSearch = async (passedValue) => {
        const jokes = fetchSearchedJokes(passedValue);
        setRandomJokes(await jokes);
    }

    // set dynamic button-text
    const esSuffix = amountOfRandomJokes === 1 ? '' : 's';
    const buttonText = 'Get ' + amountOfRandomJokes + ' ' + category + ' joke' + esSuffix;

    return (
        <Container>
            {props.doesHaveTitle &&
                <div className="title">{props.doesHaveTitle}</div>}
            {props.doesHaveSearch === "true" &&
                <SearchJokes onChange={handleSearch} />}
            {props.doesHaveCategories === "true" &&
                <CategoriesDropdown onChange={selectCategory} />}
            {props.doesHaveNumber === "true" &&
                <NumberInput value={amountOfRandomJokes} onChange={selectNumberOfJokes} />}
            <Button text={buttonText} handleClick={buttonHandler} />
            <RenderJokes jokes={randomJokes} />
        </Container>
    )
}
export default NumberOfRandomJokeUniversal;