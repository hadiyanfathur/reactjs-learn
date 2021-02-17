import React, { Suspense, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import "moment/locale/id";

// Component
import MessagePopUp from './components/MessagePopUp';
import Routes from './routes'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#FFFFFF',
        color: theme.palette.text.primary,
        alignContent:'center',
    },
}));

const App = () => {

    const classes = useStyles();

    const rootRef = useRef();

    console.log("[App.js] execute");

    return (
        <MuiPickersUtilsProvider utils={MomentUtils} locale={'id'}>
            <div className={classes.root} ref={rootRef}>
                <Suspense fallback={<CircularProgress />}>
                    <Routes />
                    <MessagePopUp />
                </Suspense>
            </div>
        </MuiPickersUtilsProvider>
    );
}

export default App;
