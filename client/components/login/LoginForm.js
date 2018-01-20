import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginAction } from './../../actions/loginAction';
import TextFieldGroup from './../shared/TextFieldGroup';
import loginValidator from './../../../server/validations/login.validator';

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

    isValid() {
        const { errors, isValid } = loginValidator(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.loginAction(this.state).then(
                res => this.context.router.push('/'),
                err => this.setState({ errors: err.response.data.errors, isLoading: false })
            );
        }
    }
    
    render() {
        const { identifier, password, errors, isLoading } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h4 className="text-center">Login</h4>

                {errors.form && <div className="alert alert-danger">{errors.form}</div>}

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

LoginForm.propTypes = {
    loginAction : PropTypes.func.isRequired
};

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(null, { loginAction })(LoginForm);
