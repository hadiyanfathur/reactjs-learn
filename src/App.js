import React, { lazy, Suspense, useRef, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './store/actions';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';

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

  useEffect(() => {
    rootRef.current.scrollIntoView();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(location)]);

  useEffect(() => {
    dispatch(actions.authCheck(token));

  }, [token]);

  return (
    <div className={classes.root} ref={rootRef}>
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/Login" exact>
            <Login />
          </Route>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <MessagePopUp />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
