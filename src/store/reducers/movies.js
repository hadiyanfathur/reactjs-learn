import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    error: null,
    loading: null,
    data: [],
    count: 0,
}

const moviesStart = (state, action) => 
    updateObject( state, {
        loading: true,
    })

const moviesSuccess = (state, action) =>
    updateObject(state, {
        data: !state.data.length ? action.data.data : [...state.data, ...action.data.data],
        count: action.data.count,
    })

const moviesFail = (state, action) =>
    updateObject(state, {
        error: action.error,
        count: 0,
    })

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MOVIE_START : return moviesStart(state, action);
        case actionTypes.MOVIE_SUCCESS : return moviesSuccess(state, action);
        case actionTypes.MOVIE_FAIL : return moviesFail(state, action);
        default: return state;
    }
}

export default reducer;