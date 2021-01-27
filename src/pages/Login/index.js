import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
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
import { showMessage } from '../../store/actions/message';

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
        color: 'primary'
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
    const [loading, setLoading] = useState(false);

    //const { auth, loading } = useSelector(({auth}) => auth);

    // ref
    const inputRef = useRef();

    const onChangeEmail = (emailValue) => {
        const valid = emailValue.match(emailRegex);
        setEmail(emailValue);
        setEmailError(
            !emailValue.length ? 'Email Cannot Be Null' : !valid ? 'Email not Valid' : ''
        );
    }

    const onChangePassword = (passwordValue) => {
        const valid = passwordValue.length > 8;
        setPassword(passwordValue);
        setPasswordError(
            valid ? '' : 'Minimum password length is 8 character'
        )
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setLoading(true);
    }

    const toogleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Auth>
            <AuthForm>
                <div className="text-center my-32">
                    <h1>LOGIN PAGES</h1>
                </div>
                <div className="w-full">
                    <form className="flex flex-col justify-center w-full" onSubmit={onSubmitHandler}>
                        <div className={clsx(classes.input, 'mb-16')}>
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
                            />
                        </div>
                        <div className={clsx(classes.input, 'mb-16')}>
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
                        </div>
                        <div className={classes.buttonWrapper}>
                            <Button
                                disabled={loading}
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
                        </div>
                    </form>
                </div>
            </AuthForm>
        </Auth>
    );
}

export default React.memo(Login);