import React from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import WarningOutlinedIcon from '@material-ui/icons/WarningOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { amber, blue } from '@material-ui/core/colors';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import * as action from '../../store/actions';

const useStyles = makeStyles(() => ({
    root: {},
    success: {
        backgroundColor: '#00E500',
        color: '#FFFFFF',
    },
    error: {
        backgroundColor: 'red',
        color: '#FFFFFF',
    },
    info: {
        backgroundColor: blue[600],
        color: '#FFFFFF',
    },
    warning: {
        backgroundColor: amber[600],
        color: '#FFFFFF',
    },
}));

const MessagePopUp = () => {
    // styles
    const classes = useStyles();

    // selector
    const { open, options } = useSelector(({ message }) => message);

    // dispatch
    const dispatch = useDispatch();

    const renderIcon = (variant) => {
        return variant === 'success' ? (
            <CheckCircleOutlineIcon className="mr-4" />
        ) : variant === 'warning' ? (
            <WarningOutlinedIcon className="mr-4" />
        ) : variant === 'error' ? (
            <ErrorOutlineIcon className="mr-4" />
        ) : variant === 'info' ? (
            <InfoOutlinedIcon className="mr-4" />
        ) : (
            <CheckCircleOutlineIcon className="mr-4" />
        );
    };

    return (
        <Snackbar
            {...options}
            open={open}
            onClose={() => dispatch(action.hideMessage())}
            classes={{
                root: classes.root,
            }}
            ContentProps={{
                variant: 'body2',
                headlineMapping: {
                    body1: 'div',
                    body2: 'div',
                },
            }}
        >
            <SnackbarContent
                className={clsx(classes[options.variant])}
                message={
                    <div className="flex items-center">
                        {renderIcon(options.variant)}
                        {options.message}
                    </div>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => dispatch(action.hideMessage())}
                    >
                        <CloseOutlinedIcon />
                    </IconButton>,
                ]}
            />
        </Snackbar>
    );
};

export default React.memo(MessagePopUp);
