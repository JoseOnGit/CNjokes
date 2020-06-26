import React, { useState, useEffect } from 'react';

function CategoriesDropdown(props) {
    const [optionList, setOptionList] = useState([]);
    
    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(data => {
            setOptionList([...data]);
        });
    },[])
    
    const handleThisChange = (event) => {
        props.onChange(event.target.value);
    }
    
    return (
        <select className="category-select" onChange={handleThisChange}>
            <option value="random">random</option>
            {optionList.map(
                (category, index) => <option value={category} key={index}>{category}</option>
            )}
        </select>
    )
}
export default CategoriesDropdown;