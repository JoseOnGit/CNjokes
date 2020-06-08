import React from 'react';
import { Input } from 'reactstrap';

function JokeCounter(props) {
    const { handleJokeCountChange } = props || {};
    return (
        <Input type="number" min ="1" defaultValue="1" onChange={handleJokeCountChange} />
    )
}

export default JokeCounter