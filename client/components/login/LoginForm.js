import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../shared/TextFieldGroup';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
    }
    
    render() {
        const { identifier, password, errors, isLoading } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h4 className="text-center">Login</h4>
                <TextFieldGroup
                    error={errors.identifier}
                    label="Email / Username"
                    field="identifier"
                    value={identifier}
                    onChange={this.onChange} 
                />

                <TextFieldGroup
                    error={errors.password}
                    label="Password"
                    field="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                />

                <div className="form-group">
                    <button 
                        disabled={this.isLoading} 
                        className="btn btn-success btn-lg col-md-offset-8">
                            Login
                    </button>
                </div>
            </form>
        );
    }
}

export default LoginForm;
