import React, { lazy, Suspense, useRef, useEffect, useCallback } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './store/actions';
import axios from 'axios';
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';

// Component
import MessagePopUp from './components/MessagePopUp';

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#FFFFFF',
        color: '#333333',
    },
}));

const App = () => {

    const classes = useStyles();

    const rootRef = useRef();

    const { token } = useSelector(({ auth }) => auth);

    const dispatch = useDispatch();

    const location = useLocation();

    const authCheck = useCallback(() => dispatch(actions.authCheck(token)), [dispatch, token])

    useEffect(() => {
        rootRef.current.scrollIntoView();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(location)]);

    useEffect(authCheck, [authCheck]);

    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root} ref={rootRef}>
                <Suspense fallback={<div />}>
                    <Switch>
                        <Route path="/Login" exact>
                            <Login />
                        </Route>
                        <Route path="/" exact>
                            <Dashboard />
                        </Route>
                    </Switch>
                    <MessagePopUp />
                </Suspense>
            </div>
        </ThemeProvider>
    );
}

export default App;
