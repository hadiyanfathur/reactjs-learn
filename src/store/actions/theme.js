import * as actionTypes from './actionTypes';

// dark mode

export const setDarkMode = (darkMode) => {
    localStorage.setItem('darkMode', darkMode);

    return {
        type: actionTypes.SET_DARK_MODE,
        darkMode,
    };
};
