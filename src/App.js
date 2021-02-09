import React, { Suspense, useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './store/actions';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Theme from './theme/themes';

// Component
import MessagePopUp from './components/MessagePopUp';
import Routes from './routes'

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
        <Theme theme={theme}>
            <div className={classes.root} ref={rootRef}>
                <Suspense fallback={<div />}>
                    <Routes />
                    <MessagePopUp />
                </Suspense>
            </div>
        </Theme>
    );
}

export default App;
