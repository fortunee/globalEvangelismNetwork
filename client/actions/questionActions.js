import axios from 'axios';
import { GET_QUESTIONS } from './types';

export const getQuestions = (state) => {
    return {
        type: GET_QUESTIONS,
        state
    };
};

export const askQuestionRequest = (data) => {
    return dispatch => {
        return axios.post('/api/question', data).then(res => {
          dispatch(getQuestionRequest());
        });
    };
};

export const getQuestionRequest = () => {
    return dispatch => {
        return axios.get('/api/question').then(res => {
            dispatch(getQuestions(res.data));
        });
    };
};
