import * as actions from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    open: false,
    options: {
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
        },
        autoHideDuration: 5000,
        message: '',
        variant: null,
    },
};

const messageShow = (state, action) =>
    updateObject(state, {
        open: true,
        options: {
            ...initialState.options,
            ...action.options,
        },
    });

const messageHide = (state, action) =>
    updateObject(state, {
        open: false,
    });

const message = (state = initialState, action) => {
    switch (action.type) {
        case actions.MESSAGE_SHOW: return messageShow();
        case actions.MESSAGE_HIDDEN: return messageHide();
        default: {
            return state;
        }
    }
};

export default message;
