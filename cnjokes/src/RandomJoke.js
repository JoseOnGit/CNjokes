import React, { useState } from 'react';
import Joke from './common/Joke'
import Button from './common/Button'

function RandomJoke() {
    const [text, setText] = useState('');
    
    console.log('==== RandomJoke is rendered ====');

    // const fetchIt = () => {
    //     console.log('==== start fetching ====')
    //     const endpoint = 'https://api.chucknorris.io/jokes/random';
    //     fetch(endpoint)
    //         .then(response => response.json())
    //         .then(data => setText(data.value))
    // };

    // useEffect(fetchIt, [])

    const button = document.querySelector('button');
    console.log('%c⧭ button ', 'color: #1d3f73', button);
    

    return (
        <div className="joke-box">
            <Joke text={text} />
            <Button text="Get random joke" onClick={() => setText('Jozko')} />
        </div>
    )
}
export default RandomJoke;