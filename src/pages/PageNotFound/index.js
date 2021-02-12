import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '14px',
    },
    button: {
        height: '35px',
        padding: '0 32px',
        textTransform: 'capitalize',
    },
    code: {
        fontSize: '10rem',
        color: theme.palette.primary.main,
        fontWeight: 500,
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
    },
    disabled: {
        color: theme.palette.text.disabled,
    },
}));
console.log("not Found");
const PageNotFound = () => {
    // styles
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={clsx('text-center', classes.code)}>404</div>
            <div className={clsx('text-center text-3xl mb-8', classes.disabled)}>
                Oops! Halaman tidak ditemukan
            </div>
            <div className={clsx('text-center mb-8', classes.disabled)}>
                Maaf, tapi halaman yang anda cari tidak ditemukan. Pastikan URL yang anda
                masukkan benar.
            </div>
            <div className="text-center">
                <Link to="/" className={classes.link}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Halaman Utama
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default React.memo(PageNotFound);
