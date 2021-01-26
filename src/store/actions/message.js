import * as actionTypes from './actionTypes';

export const hideMessage = () => ({
    type: actionTypes.MESSAGE_HIDDEN,
});

export const showMessage = (options) => ({
    type: actionTypes.MESSAGE_SHOW,
    options,
});
