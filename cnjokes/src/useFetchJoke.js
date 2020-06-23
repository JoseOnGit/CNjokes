import { useState } from 'react';

function useFetchJoke() {
    const [randomJokes, setRandomJokes] = useState([]);
    console.log('%c⧭ randomJokes', 'color: #red', randomJokes)
    const allJokes = [...randomJokes];
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            allJokes.push(data.value);
            setRandomJokes(allJokes);
        });
        console.log('%c⧭ randomJokes', 'color: #red', randomJokes);
}
export default useFetchJoke;