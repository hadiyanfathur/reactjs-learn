import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { defaultApi } from '../../shared/baseApi';
import * as actionTypes from './actionTypes';
import { showMessage } from './message';

export const authStart = () => ({
    type: actionTypes.AUTH_START,
    error: null,
    loading: true,
});

export const authSuccess = (token) => ({
    type: actionTypes.AUTH_SUCCESS,
    loading: false,
    token
});

export const authFail = (error) => ({
    type: actionTypes.AUTH_FAIL,
    loading: false,
    error
});

export const auth = (email, password) => async (dispatch) => {
    dispatch(authStart());
    const authData = {
        email,
        password,
        grant_type: 'password'
    };
    const url = '/oauth/token';
    await axios
        .post(url, authData)
        .then((response) => {
            const { access_token, token_type } = response.data;
            const token = `${token_type} ${access_token}`;

            localStorage.setItem('key', token);
            dispatch(authSuccess(token));
        })
        .catch((error) => {
            const message = error?.response?.data?.message || 'Internal Server Error';
            dispatch(authFail(message));
            dispatch(showMessage({ message, variant: 'error' }));
        });
}

export const authCheck = (token) => {
    let login;
    try {
        const decodedToken = jwtDecode(token);
        login = decodedToken.user.login;
    } catch (e) {
        login = false;
    }

    return {
        type: actionTypes.AUTH_CHECK,
        authenticated: login
    }
}

export const authLogout = () => {
    localStorage.removeItem('key');
    return {
        type: actionTypes.AUTH_LOGOUT,
        token: null
    }
}