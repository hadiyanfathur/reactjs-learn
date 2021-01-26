import React, { useRef, useState } from 'react';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOffOutlined';
import { TextField, Button, CircularProgress, InputAdornment, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

//component import
import Auth from "../../components/Auth/Auth";
import AuthForm from "../../components/Auth/AuthForm";

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'inline-flex',
        position: 'relative',
        flexDirection: 'column',
        verticalAlign: 'top',
    },
    buttonWrapper: {
        position: 'relative',
    },
    button: {
        height: '35px',
        textTransform: 'capitalize',
    },
    progress: {
        position: 'absolute',
        marginTop: '5px',
        left: '50%',
        marginLeft: -12,
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
    },
}));

const Login = () => {
    const classes = useStyles();

    const [loading, setLoading] = useState(false);

    // ref
    const inputRef = useRef();

    const onSubmitButtonHandler = (e, loading) => {
        e.preventDefault();
        setLoading(!loading);
    }

    return (
        <Auth>
            <AuthForm>
                <div className="text-center my-32">
                    <h1> LOGIN PAGES</h1>
                </div>
                <div className="w-full">
                    <form className="flex flex-col justify-center w-full">
                        <div className={clsx(classes.input, 'mb-16')}>
                            <TextField
                                inputRef={inputRef}
                                id="email"
                                onChange={() => { }}
                                variant="outlined"
                                label={
                                    <div>
                                        Email <span className="text-red"> *</span>
                                    </div>
                                }
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Icon>
                                                <EmailIcon />
                                            </Icon>
                                        </InputAdornment>
                                    ),
                                }}
                                helperText={null}
                                error={null}
                            />
                        </div>
                        <div className={clsx(classes.input, 'mb-16')}>
                            <TextField
                                id="user-password"
                                value={null}
                                onChange={() => {}}
                                variant="outlined"
                                label={
                                    <div>
                                        Kata Sandi <span className="text-red"> *</span>
                                    </div>
                                }
                                type={false ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Icon
                                                onClick={null}
                                                className="cursor-pointer"
                                            >
                                                        <VisibilityIcon />
                                            </Icon>
                                        </InputAdornment>
                                    ),
                                }}
                                helperText={null}
                                error={null}
                                autoComplete="on"
                            />
                        </div>
                        <div className={classes.buttonWrapper}>
                            <Button
                                disabled={null}
                                variant="contained"
                                color="primary"
                                className={clsx(classes.button, 'w-full mx-auto mt-16')}
                                type="submit"
                                onClick={(e) => {onSubmitButtonHandler(e, loading)}}
                            >
                            {loading ? '' : 'LOGIN'}
                            </Button>
                            {loading && (
                                <CircularProgress
                                    className={classes.progress}
                                    size={25}
                                    color='#A45FD5'
                                />)}
                        </div>
                    </form>
                </div>
            </AuthForm>
        </Auth>
    );
}

export default React.memo(Login);