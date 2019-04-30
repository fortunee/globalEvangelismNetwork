import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

import LoginForm from './LoginForm';


class Login extends Component {
    render() {
        return (
            <div>
                <Col md={4} mdOffset={3}>
                    <LoginForm />
                </Col>
            </div>
        );
    }
}

export default Login;
