import React, { useState, useEffect } from 'react';

import JokeCategorySelect from '../components/JokeCategorySelect';
import JokeCounter from '../components/JokeCounter';
import JokeList from '../components/JokeList';

const CHUCK_API = 'https://api.chucknorris.io/';
const RANDOM_JOKE_QUERY = 'jokes/random';
const CATEGORIES_QUERY = 'jokes/categories';

function MainPage()  {
    const [jokeList, setJokeList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Any');
    const [jokeCount, setJokeCount] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const apiBaseGet = query => fetch(`${CHUCK_API}${query}`).then(response => response.json())

    const getJokes = () => {
        const categoryQuery = selectedCategory === 'Any' ? '' : `?category=${selectedCategory}`;

        setIsLoading(true);
        let tempJokeList = [];
        let i;
        let responseCounter = 0;
        for (i = 0; i < jokeCount; i++) {
            apiBaseGet(`${RANDOM_JOKE_QUERY}${categoryQuery}`)
            .then(data => {
                tempJokeList.push(data.value);
                responseCounter++;
                if (responseCounter === jokeCount) {
                    setJokeList(tempJokeList);
                    setIsLoading(false);
                }
            });
        }
    };

    const getCategories = () => {
        apiBaseGet(CATEGORIES_QUERY)
            .then(data => setCategories(data))
    };
    
    useEffect(() => {
        getJokes();
        getCategories();
    }, [])

    const handleCategoryChange = event => {
        const { value } = event.target || {};
        setSelectedCategory(value)
    }

    const handleJokeCountChange = event => {
        const { value } = event.target || {};
        setJokeCount(parseInt(value))
    }

    return (
        <div className="chuck-wrap">
            <div className="chuck-header" />
            <JokeList jokeList={jokeList} isLoading={isLoading}/>
            <button onClick={getJokes}>Get a random joke</button>
            <JokeCategorySelect categories={categories} handleCategoryChange={handleCategoryChange}/>
            <JokeCounter handleJokeCountChange={handleJokeCountChange}/>
        </div>
    );
}

export default MainPage
