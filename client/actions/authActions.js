import axios from 'axios';

export const loginAction = (data) => {
    return dispatch => {
        return axios.post('/api/auth', data);
    };
};
