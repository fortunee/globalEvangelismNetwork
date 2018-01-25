import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { askQuestion } from './../../actions/questionActions';

import QuestionForm from './QuestionForm';

class Questions extends Component {
    render() {
        const { askQuestion } = this.props;
        return (
            <div>
                <h1>Questions</h1>
                <QuestionForm askQuestion={askQuestion}/>
            </div>
        );
    }
}

Questions.propTypes = {
    askQuestion: PropTypes.func.isRequired
};

export default connect(null, { askQuestion })(Questions);