import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validateData from './../../../server/validations/signup.validator';
import TextFieldGroup from './../shared/TextFieldGroup';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {},
            isLoading: false,
            invalid: false
        };

        this.onChange = this.onChange.bind(this);
        this.checkUserExists = this.checkUserExists.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    isValid() {
        const { errors, isValid } = validateData(this.state);

        if(!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    checkUserExists(e) {
        e.preventDefault();
        const field =  e.target.name;
        const value = e.target.value;

        if (value !== '') {
            this.props.isUserExists(value).then(res => {
                let errors = this.state.errors;
                let invalid;
                if (res.data.user) {
                    errors[field] = `User with that ^ ${field} exists`;
                    invalid = true;
                } else {
                    errors[field] = '';
                    invalid = false;
                }
                this.setState({ errors, invalid });
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.userSignupRequest(this.state).then(
                () => { 
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'You signed up successfully!'
                    });
                    this.context.router.push('/');
                },
                (err) => this.setState({ errors: err.response.data, isLoading: false })
            );
        }
    }


    render() {
        const { errors } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h4 className="text-center">Please Join!</h4>

                <TextFieldGroup 
                    error={errors.name}
                    label="Full Name"
                    value={this.state.name}
                    field="name"
                    onChange={this.onChange}
                />

                <TextFieldGroup 
                    error={errors.username}
                    label="Username"
                    value={this.state.username}
                    field="username"
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                />

                <TextFieldGroup 
                    error={errors.email}
                    label="Email"
                    value={this.state.email}
                    field="email"
                    type="email"
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                />

                <TextFieldGroup 
                    error={errors.password}
                    label="Password"
                    value={this.state.password}
                    field="password"
                    type="password"
                    onChange={this.onChange}
                />

                <TextFieldGroup 
                    error={errors.confirmPassword}
                    label="Confirm Password"
                    value={this.state.confirmPassword}
                    field="confirmPassword"
                    type="password"
                    onChange={this.onChange}
                />

                <div className="form-group">
                    <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-success btn-lg col-md-offset-8">
                        Signup
                    </button>
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
    router: PropTypes.object.isRequired
};

export default SignupForm;
