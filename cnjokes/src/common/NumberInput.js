import React from 'react';

const NumberInput = ({onChange, value}) => {
    const handleThisChange = (event) => {
        onChange(event.target.value);
    }
    return (
        <input type="number" className="number-input" value={value} onChange={handleThisChange} />
    )
}
export default NumberInput;