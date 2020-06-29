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

    const {doesHaveTitle, doesHaveSearch, doesHaveCategories, doesHaveNumber} = props;

    // get joke on first render
    useEffect(() => {
        if(!doesHaveCategories && !doesHaveNumber) {
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
        const jokes = await fetchSearchedJokes(passedValue);
        setRandomJokes( jokes);
    }

    // set dynamic button-text
    const buttonText = `Get ${amountOfRandomJokes} ${category} joke${amountOfRandomJokes === 1 ? '' : 's'}`;

    return (
        <Container>
            {doesHaveTitle &&
                <div className="title">{doesHaveTitle}</div>}
            {doesHaveSearch &&
                <SearchJokes onChange={handleSearch} />}
            {doesHaveCategories &&
                <CategoriesDropdown onChange={selectCategory} />}
            {doesHaveNumber &&
                <NumberInput value={amountOfRandomJokes} onChange={selectNumberOfJokes} />}
            <Button text={buttonText} handleClick={buttonHandler} />
            <RenderJokes jokes={randomJokes} />
        </Container>
    )
}
export default NumberOfRandomJokeUniversal;
