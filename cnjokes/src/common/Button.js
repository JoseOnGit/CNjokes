import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        handleClick: PropTypes.func,
    }
    handleThisClick = (event) => {
        this.props.handleClick();
    }
    render() {
        return (
            <button className="button" onClick={this.handleThisClick}>{this.props.text}</button>
        )

    }
}
export default Button;