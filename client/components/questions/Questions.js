import React, { Component } from 'react';
import QuestionForm from './QuestionForm';

class Questions extends Component {
    render() {
        return (
            <div>
                <h1>Questions</h1>
                <QuestionForm />
            </div>
        );
    }
}

export default Questions;