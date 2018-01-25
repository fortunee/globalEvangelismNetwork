import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './question.style.css';

class Question extends Component {
    render() {
        const { question } = this.props.question;

        return (
            <div>
                <div className="col-sm-10 question-wrapper">
                    <a href="#"><h2>{question}</h2> </a> 
                    <div className="pull-right">
                        <a href="#"><em> No Answer</em></a>
                        <a href="#"> Downvote</a> 
                        <a href="#"> Report</a>
                    </div>
                </div>
            </div>
        );
    }
}

Question.propTypes = {
    question: PropTypes.object.isRequired
};

export default Question;
