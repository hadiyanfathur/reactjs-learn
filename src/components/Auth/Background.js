import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#004fd680',
    },
}));

const root =
    'flex flex-col flex-no-grow items-center text-white p-16 text-center md:p-128 md:items-start md:flex-no-shrink md:flex-1 md:text-left hidden md:block';

const Background = () => {
    // styles
    const classes = useStyles();

    return <div className={clsx(root, classes.root)} />;
};

export default React.memo(Background);
