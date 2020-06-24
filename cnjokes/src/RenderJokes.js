import React from 'react';
import Joke from './common/Joke';

function RenderJokes(props) {
    console.log('%c⧭ jokes send as a props ', 'color: #807160', props.jokesArray);
    let pole = [];
    pole = props.jokesArray;
    let druhePole = pole.reduce((together, joke) => {
        return together += `<p>"${joke}"</p>`;
    },[]);
    console.log('%c⧭ druhePole ', 'color: #997326', druhePole);
    return (
        <div className="container">
            {/* {pole.map(
                (joke, index) => {
                    console.log('%c⧭ joke to render ', 'color: #007300', joke);

                    return <Joke text={'Multiple jokes: ' + joke} key={index} />
                }
            )} */}
            <Joke text={`Single joke: ${druhePole} ` + druhePole} />
        </div>

        
    )
}
export default RenderJokes;