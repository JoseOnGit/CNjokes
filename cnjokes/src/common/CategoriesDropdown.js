import React from 'react';
import PropTypes from 'prop-types';

class CategoriesDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: PropTypes.number,
            onChange: PropTypes.func,
            optionList: [],
        }
    }
    componentDidMount() {
        this.fetchCategories();
    }
    fetchCategories() {
        const endpoint = 'https://api.chucknorris.io/jokes/categories';
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                const allCategories = this.state.optionList;
                allCategories.push(...data);
                this.setState({
                    optionList: allCategories,
                })
            });
    }
    handleThisChange = (event) => {
        this.props.onChange(event.target.value);
    }
    render() {
        const list = this.state.optionList.map(
            (category, index) => <option key={index} value={category}>{category}</option>
        );
        return (
            <select className="category-select" onChange={this.handleThisChange}>
                <option value="random">random</option>
                {list}
            </select>
        )

    }
}
export default CategoriesDropdown;