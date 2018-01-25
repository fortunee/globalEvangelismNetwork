import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import { askQuestion } from './../../actions/questionActions';

import QuestionForm from './QuestionForm';
import Question from './Question';

import './question.style.css';

class QuestionsList extends Component {
    render() {
        const { askQuestion } = this.props;
        const questions = this.props.questions.map(question =>
            <Question key={shortid.generate()} question={question} />
        );
        return (
            <div>
                <div className="question-form">
                    <QuestionForm askQuestion={askQuestion}/>
                </div>
                {questions}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions
    };
}

QuestionsList.propTypes = {
    askQuestion: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { askQuestion })(QuestionsList);