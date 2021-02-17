import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOffOutlined';
import { TextField, Button, CircularProgress, InputAdornment, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

//component import
import Auth from "../../components/Auth/Auth";
import AuthForm from "../../components/Auth/AuthForm";
import { emailRegex } from '../../shared/utility'
import * as actions from '../../store/actions';

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
        height: '45px',
        textTransform: 'capitalize',
    },
    progress: {
        position: 'absolute',
        marginTop: '5px',
        left: '50%',
        marginLeft: -12,
        color: theme.palette.primary.main
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
    },
}));

const Login = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { authenticated, loading } = useSelector(({ auth }) => auth);

    const inputRef = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        authenticated && (window.location = '/');
    }, [authenticated])

    const onChangeEmail = (emailValue) => {
        const valid = emailValue.match(emailRegex);
        setEmail(emailValue);
        setEmailError(
            !emailValue.length ? 'Email Cannot Be Null' : !valid ? 'Email not Valid' : ''
        );
    }

    const onChangePassword = (passwordValue) => {
        const valid = passwordValue.length > 6;
        setPassword(passwordValue);
        setPasswordError(
            valid ? '' : 'Minimum password length is 8 character'
        )
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(actions.auth(email, password));
    }

    const toogleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const isButtonDisabled = () => {
        return !email || !password || emailError !== '' || passwordError !== '' || loading;
    }

    const onSubmitLogoutHandler = (event) => {
        event.preventDefault();
        dispatch(actions.showMessage({ message: "LOGOUT CLICKED", variant: "success" }));
        dispatch(actions.authLogout());
        setEmail('');
        setPassword('');
    }

    return (
        <Auth>
            <AuthForm>
                <div className="text-center my-32">
                    <h1>{!authenticated ? 'LOGIN PAGES' : 'YOURE LOGIN'} </h1>
                </div>
                <div className="w-full">
                    <form className="flex flex-col justify-center w-full" onSubmit={onSubmitHandler}>
                        <div className={clsx(classes.input, 'mb-16')}>
                            {!authenticated ?
                                <TextField
                                    inputRef={inputRef}
                                    value={email}
                                    id="email"
                                    onChange={(e) => { onChangeEmail(e.target.value) }}
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
                                    helperText={emailError}
                                    error={emailError !== ''}
                                /> : null
                            }
                        </div>

                        <div className={clsx(classes.input, 'mb-16')}>
                            {!authenticated ?
                                <TextField
                                    id="user-password"
                                    value={password}
                                    onChange={(e) => { onChangePassword(e.target.value) }}
                                    variant="outlined"
                                    label={
                                        <div>
                                            Kata Sandi <span className="text-red"> *</span>
                                        </div>
                                    }
                                    type={showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Icon
                                                    onClick={toogleShowPassword}
                                                    className="cursor-pointer"
                                                >
                                                    {!showPassword ?
                                                        <VisibilityOffIcon /> : <VisibilityIcon />
                                                    }

                                                </Icon>
                                            </InputAdornment>
                                        ),
                                    }}
                                    helperText={passwordError}
                                    error={passwordError !== ''}
                                    autoComplete="on"
                                />
                                : null
                            }
                        </div>
                        <div className={classes.buttonWrapper}>
                            {!authenticated ?
                                <Button
                                    disabled={isButtonDisabled()}
                                    variant="contained"
                                    color="primary"
                                    className={clsx(classes.button, 'w-full mx-auto mt-16')}
                                    type="submit"
                                >
                                    {loading ? <CircularProgress
                                        className={classes.progress}
                                        size={25}
                                    /> : 'LOGIN'}
                                </Button>
                                :
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={clsx(classes.button, 'w-full mx-auto mt-16')}
                                    type="button"
                                    onClick={onSubmitLogoutHandler}
                                >
                                    {loading ? <CircularProgress
                                        className={classes.progress}
                                        size={25}
                                    /> : 'Logout'}
                                </Button>
                            }
                        </div>
                    </form>
                </div>
            </AuthForm>
        </Auth>
    );
}

export default React.memo(Login);