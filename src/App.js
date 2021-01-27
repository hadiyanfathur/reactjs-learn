import React, { lazy, Suspense, useRef, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './store/actions';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';

// Component
import MessagePopUp from './components/MessagePopUp';

const Login = lazy(() => import('./pages/Login'));

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

  return (
    <div className={classes.root} ref={rootRef}>
      <Suspense fallback={<div />}>
        <Route path="/" exact>
          <Login />
        </Route>
        <MessagePopUp />
      </Suspense>
    </div>
  );
}

export default App;
