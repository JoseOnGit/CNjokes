import React from 'react';

function NumberInput(props) {
    const handleThisChange = (event) => {
        props.onChange(event.target.value);
    }
    return (
        <input type="number" className="number-input" value={props.value} onChange={handleThisChange} />
    )
}
export default NumberInput;