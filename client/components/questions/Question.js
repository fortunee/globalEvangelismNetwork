import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
    render() {
        const { question } = this.props;
        return (
            <div>
                {question};
            </div>
        );
    }
}

Question.propTypes = {
    question: PropTypes.object.isRequired
};

export default Question;