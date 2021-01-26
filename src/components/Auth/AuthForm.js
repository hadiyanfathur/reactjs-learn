import React from 'react';
import Animate from '../Animate';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    loginWrapper: {
        backgroundColor: '#FFFFFF',
        minHeight: '100vh',

        maxWidth: 375,
    },
    loginForm: {
        minHeight: 'calc(100vh - 113px)',
    },
    '@media (max-width: 767px)': {
        loginWrapper: {
            minHeight: 'calc(100vh - 47px)',
        },
        loginForm: {
            minHeight: 'calc(100vh - 160px)',
        },
    },
}));

const AuthFrom = ({ children }) => {
    // styles
    const classes = useStyles();

    return (
        <Animate animation="transition.slideRightIn" delay={200}>
            <div
                className={clsx(
                    classes.loginWrapper,
                    'flex flex-col justify-between mx-auto w-full'
                )}
            >
                <div
                    className={clsx(
                        classes.loginForm,
                        'flex flex-col items-center justify-center px-24 md:px-48'
                    )}
                >
                    <div className="w-full pb-32">{children}</div>
                </div>
            </div>
        </Animate>
    );
};

export default React.memo(AuthFrom);
