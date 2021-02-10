import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: localStorage.getItem('key'),
    error: null,
    loading: null,
    authenticated: null,
}

const authStart = (state, action) =>
    updateObject(state, {
        loading: action.loading,
    });


const authSuccess = (state, action) =>
    updateObject(state, {
        token: action.token,
        loading: action.loading,
    });


const authFail = (state, action) =>
    updateObject(state, {
        error: action.error,
        loading: action.loading,
    });


const authCheck = (state, action) =>
    updateObject(state, {
        authenticated: action.authenticated
    });

const authLogout = (state, action) =>
    updateObject({
        token: action.token,
    });


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authSuccess(state, action);
        case actionTypes.AUTH_CHECK: return authCheck(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default: return state;
    }
}

export default reducer;