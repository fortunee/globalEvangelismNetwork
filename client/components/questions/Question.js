import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
    render() {
        const { question } = this.props.question;

        return (
            <div className="container">
                <div className="col-sm-10">
                    <h2>{question}</h2> 
                    <button className="btn btn-default">Answer</button>
                </div>
            </div>
        );
    }
}

Question.propTypes = {
    question: PropTypes.object.isRequired
};

export default Question;
