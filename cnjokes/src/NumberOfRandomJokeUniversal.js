import React, { useState, useEffect } from 'react';
import RenderJokes from './RenderJokes';
import Button from './common/Button';
import NumberInput from './common/NumberInput'

function NumberOfRandomJokeUniversal(props) {
    const [randomJoke, setRandomJoke] = useState([]);
    const [amountOfRandomJokes, setAmountOfRandomJokes] = useState(1);

    useEffect(() => {
        const input = document.querySelector('.number-input');
        console.log('%c⧭ input.value ', 'color: #bfffc8', input.value);
        setAmountOfRandomJokes(parseInt(input.value));
    },[amountOfRandomJokes])


    function handle() {
        let all = [];
        for(let i=0; i<amountOfRandomJokes; i++) {
            fetchJoke(all);
        }
        console.log('%c⧭ handle: all ', 'color: #e57373', all);
    }
    
    function fetchJoke(all) {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(
                (data) => {
                    all.push(data.value);
                    setRandomJoke(all);
                }
            );
    }


    const esSuffix = amountOfRandomJokes === 1 ? '' : 's';  
    const buttonText = 'Get ' + amountOfRandomJokes + ' random joke' + esSuffix;

    return (
        <div className="random-joke-box">
            <RenderJokes jokesArray={randomJoke} />
            <NumberInput 
                value={amountOfRandomJokes} 
                onChange={(passedValue) => setAmountOfRandomJokes(parseInt(passedValue))}
            />
            <Button 
                text={buttonText} 
                handleClick={() => handle()} 
            />
        </div>       
    )
        
}
export default NumberOfRandomJokeUniversal;