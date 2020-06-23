import React, { useState } from 'react';
import Greeting from '../Greeting';

function SetName() {
    const [name, setName] = useState('John');
    return (
        <div>
            <Greeting name={name} />
            <button onClick={() => setName('John')}>John</button>
            <button onClick={() => setName('Ivan')}>Ivan</button>
            <button onClick={() => setName('Alice')}>Alice</button>
            <button onClick={() => setName('David')}>David</button>
        </div>
    )
}
export default SetName;