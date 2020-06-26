import React from 'react';

function Button(props) {
    const handleThisClick = () => {
        props.handleClick();
    }
    return (
        <button className="button" onClick={handleThisClick}>{props.text}</button>
    )
}
export default Button;