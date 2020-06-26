import React from 'react';

function Joke(props) { 
    return (
        <div className="joke"><span>{props.text}</span></div>
    )
}
export default Joke;
