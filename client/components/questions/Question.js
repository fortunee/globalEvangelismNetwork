import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
    render() {
        const { title, upvote, downvote } = this.props.question;
        return (
            <div>
                <div className="col-sm-10 question-wrapper">
                    <a href="#"><h3>{title}</h3> </a> 
                    <div className="pull-right">
                        <a href="#"><em> No Answer </em></a> 
                        <button className="btn btn-success"> {upvote} Upvote </button> 

                        <button className="btn btn-success"> {downvote} Downvote </button> 
                        
                        <button className="btn btn-success"> Report</button>
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
