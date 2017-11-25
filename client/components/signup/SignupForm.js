import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { Form, FormGroup, FormControl, Col, Checkbox, Button } from 'react-bootstrap';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h4 className="text-center">Please Join!</h4>

                <div className="form-group">
                    <label className="control-label">Full Name</label>
                    <input
                        value={this.state.name}
                        onChange={this.onChange}
                        type="text"
                        name="name"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Confirm Password</label>
                    <input
                        value={this.state.confirmPassword}
                        onChange={this.onChange}
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-success btn-lg col-md-offset-8">
                        Signup
                    </button>
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
};

export default SignupForm;
