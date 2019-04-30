import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignupForm from './SignupForm';
import { userSignupRequest, isUserExists } from './../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessagesAction';

class Signup extends Component {
    render() {
        const { userSignupRequest, addFlashMessage, isUserExists } = this.props;

        return (
            <div>
                <Row>
                    <Col md={4} mdOffset={3}>
                        <SignupForm userSignupRequest={userSignupRequest} isUserExists={isUserExists} addFlashMessage={addFlashMessage} />
                    </Col>
                </Row>
            </div>
        );
    }
}

Signup.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
};

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(Signup);
