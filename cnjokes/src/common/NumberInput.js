import React from 'react';
import PropTypes from 'prop-types';

class NumberInput extends React.Component {
    static propTypes = {
        value: PropTypes.number,
        onChange: PropTypes.func,
    }
    handleThisChange = (event) => {
        this.props.onChange(event.target.value);
    }
    render() {
        return (
            <input type="number" value={this.props.value} className="number-input" onChange={this.handleThisChange} />
        )

    }
}
export default NumberInput;