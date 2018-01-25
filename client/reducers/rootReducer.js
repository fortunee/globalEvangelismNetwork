import { combineReducers } from 'redux';
import flashMessages from './flashMessagesReducer';
import auth from './authReducer';
import questions from './questionReducer';

export default combineReducers({
    flashMessages,
    auth,
    questions
});
