import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateQuestion from './../../../server/validations/question.validator';

class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            errors: {},
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    isValid() {
        console.log(this.state);
        const { errors, isValid } = validateQuestion(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }
    
    onChange(e) {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;

        this.setState({[field]: value});
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true});
            this.props.askQuestionRequest(this.state).then(
                res => this.setState({isLoading: false}),
                err => this.setState({ errors: err.response.data.errors, isLoading: false })
            );
        }
    }

    render() {
        return (
            <div className="col-sm-10">
                <form onSubmit={this.onSubmit}>
                    <div className={classnames("form-group", {"has-error": this.state.errors.title })}>
                        <textarea 
                            className="form-control" 
                            name="title" 
                            value={this.state.title}
                            onChange={this.onChange}
                            rows="2">
                        </textarea>
                        {this.state.errors.title && <span className="help-block">{this.state.errors.title}</span>}
                    </div>

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
            </div>
        );
    }
}

QuestionForm.propTpyes = {
    askQuestionRequest: PropTypes.func.isRequired
};

export default QuestionForm;
