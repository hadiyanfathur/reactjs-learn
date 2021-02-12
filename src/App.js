import React, { Suspense, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Theme from './theme/themes';
import CircularProgress from '@material-ui/core/CircularProgress';

// Component
import MessagePopUp from './components/MessagePopUp';
import Routes from './routes'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#FFFFFF',
        color: '#333333',
        alignContent:'center',
    },
}));

const App = () => {

    const classes = useStyles();

    const rootRef = useRef();

    const location = useLocation();

    const theme = useTheme();

    console.log("[App.js] execute");

    return (
        <Theme theme={theme}>
            <div className={classes.root} ref={rootRef}>
                <Suspense fallback={<CircularProgress />}>
                    <Routes />
                    <MessagePopUp />
                </Suspense>
            </div>
        </Theme>
    );
}

export default App;
