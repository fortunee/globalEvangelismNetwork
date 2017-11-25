import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
            isLoading: false
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
        this.setState({ errors: {}, isLoading: true });
        e.preventDefault();
        this.props.userSignupRequest(this.state).then(
            () => {},
            (err) => this.setState({ errors: err.response.data, isLoading: false })
        );
    }


    render() {
        const { errors } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h4 className="text-center">Please Join!</h4>

                <div className={classnames("form-group", {"has-error": errors.name})}>
                    <label className="control-label">Full Name</label>
                    <input
                        value={this.state.name}
                        onChange={this.onChange}
                        type="text"
                        name="name"
                        className="form-control"
                    />
                    {errors.name && <span className="help-block">{errors.name}</span>}
                </div>

                <div className={classnames("form-group", {"has-error": errors.username})}>
                    <label className="control-label">Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control"
                    />
                    {errors.username && <span className="help-block">{errors.username}</span>}
                </div>

                <div className={classnames("form-group", {"has-error": errors.email})}>
                    <label className="control-label">Email</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                        className="form-control"
                    />
                    {errors.email && <span className="help-block">{errors.email}</span>}
                </div>

                <div className={classnames("form-group", {"has-error": errors.password})}>
                    <label className="control-label">Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                    {errors.password && <span className="help-block">{errors.password}</span>}
                </div>

                <div className={classnames("form-group", {"has-error": errors.confirmPassword})}>
                    <label className="control-label">Confirm Password</label>
                    <input
                        value={this.state.confirmPassword}
                        onChange={this.onChange}
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                    />
                    {errors.confirmPassword && <span className="help-block">{errors.confirmPassword}</span>}
                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-success btn-lg col-md-offset-8">
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
