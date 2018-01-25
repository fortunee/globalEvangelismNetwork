import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextFieldGroup from '../shared/TextFieldGroup';

class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(e) {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;

        this.setState({[field]: value});
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({isLoading: true});
        this.props.askQuestion(this.state);
        this.setState({isLoading: false});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <textarea 
                    className="form-control" 
                    name="question" 
                    value={this.state.question}
                    onChange={this.onChange}
                    rows="2">
                </textarea>

                <br/>
                <div className="form-group">
                    <button 
                        disabled={this.state.isLoading} 
                        className="btn btn-lg btn-success pull-right" 
                        type="submit">
                        Ask a question
                    </button>
                </div>
            </form>
        );
    }
}

QuestionForm.propTpyes = {
    askQuestion: PropTypes.func.isRequired
};

export default QuestionForm;
