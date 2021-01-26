import React from 'react';
import clsx from 'clsx';
import Background from './Background';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    rootDefault: {
        background: '#FFFFFF',
    },
}));

const Auth = ({ children }) => {
    // classes
    const classes = useStyles();

    return (
        <div
            className={clsx(
                classes.rootDefault,
                'flex flex-col flex-1 flex-no-shrink p-16 md:flex-row md:p-0'
            )}
        >
            <Background />
            {children}
        </div>
    );
};

export default React.memo(Auth);