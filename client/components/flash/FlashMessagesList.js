import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from './../../actions/flashMessagesAction';

class FlashMessagesList extends Component {
    render() {
        const { deleteFlashMessage } = this.props;
        const messages = this.props.messages.map(message =>
            <FlashMessage key={message.id} message={message} deleteFlashMessage={deleteFlashMessage}/>
        );
        return (
            <div> {messages} </div>
        );
    }
}

FlashMessagesList.propTypes = {
    messages: PropTypes.array.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    };
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
