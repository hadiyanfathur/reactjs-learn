import React, { Suspense, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

    const location = useLocation();

    useEffect(() => {
        rootRef.current.scrollIntoView();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(location)]);

    const theme = useTheme();

    console.log("[App.js] execute");

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
