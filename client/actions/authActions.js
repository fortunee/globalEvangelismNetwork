import axios from 'axios';
import jwt from 'jsonwebtoken';

import setAuthToken from './../utils/setAuthToken';
import { SET_CURRENT_USER } from './types';

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    };
};

export const loginAction = (data) => {
    return dispatch => {
        return axios.post('/api/auth', data).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            dispatch(setCurrentUser(jwt.decode(token)));
        });
    };
};
