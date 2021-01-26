import React, { lazy, Suspense, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
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

  return (
    <div className={classes.root} ref={rootRef}>
      <Suspense fallback={<div />}>
        <Login />
      </Suspense>
    </div>
  );
}

export default App;
