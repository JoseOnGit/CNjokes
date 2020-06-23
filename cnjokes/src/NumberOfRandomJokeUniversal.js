import React, { useState, useEffect } from 'react';
import Joke from './common/Joke';
import Button from './common/Button';
import NumberInput from './common/NumberInput'

function NumberOfRandomJokeUniversal(props) {
    const [randomJokes, setRandomJokes] = useState([]);
    const [amountOfRandomJokes, setAmountOfRandomJokes] = useState(1);

    function handle() {
        let allJokes = [];
        for(let i=0; i<amountOfRandomJokes; i++) {
            fetchJoke(allJokes);
        }
    }
    
    function fetchJoke(allJokes) {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                allJokes.push(data.value);
                console.log('%c⧭ data ', 'color: #00bf00', data);
                console.log('%c⧭ allJokes  ', 'color: #00a3cc', allJokes);
                setRandomJokes(allJokes);
            });
    }
    return (
        <div className="random-joke-box">
            <div className="container">
                {randomJokes.map(
                    (joke, index) => {
                        return <Joke text={joke} key={index} />
                    }
                )}
            </div>

            <NumberInput 
                value={amountOfRandomJokes} 
                onChange={(passedValue) => setAmountOfRandomJokes(parseInt(passedValue))}
            />

            <Button 
                text='Buttonis' 
                handleClick={() => handle()} 
            />
        </div>       
    )
        
}
export default NumberOfRandomJokeUniversal;