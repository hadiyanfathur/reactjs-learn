import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const darkMode = JSON.parse(localStorage.getItem('darkMode'));

const initialState = {
    darkMode: darkMode || false,
};

// dark mode

const setDarkMode = (state, action) =>
    updateObject(state, {
        darkMode: action.darkMode,
    });

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DARK_MODE:
            return setDarkMode(state, action);
        default:
            return state;
    }
};

export default reducer;
