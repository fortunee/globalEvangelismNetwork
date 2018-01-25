import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
    render() {
        const { question } = this.props.question;

        return (
            <div>
                <div className="col-sm-10 question-wrapper">
                    <a href="#"><h3>{question}</h3> </a> 
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
