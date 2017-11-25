import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import SignupForm from './SignupForm';

class Signup extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={4} mdOffset={3}>
                        <SignupForm />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Signup;
