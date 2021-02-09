import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const NotFound = lazy(() => import('../pages/PageNotFound'));

const Routes = () => {

    return (
        <Switch>
            <Route path="/Login" exact render={() => <Login />}/>
            <Route path="/" exact render={() => <Dashboard />}/>
            <Route path="*" render={() => <NotFound />}/>
        </Switch>
    );
}

export default Routes;

