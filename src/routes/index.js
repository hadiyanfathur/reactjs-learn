import React, { lazy, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import { baseApi } from '../shared/baseApi';

import * as actions from '../store/actions';
import PrivateRoute from "../routes/privateRoute"

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieCreate = lazy(() => import('../pages/Movies/MovieCreate'));
const Actors = lazy(() => import('../pages/Actors'));
const NotFound = lazy(() => import('../pages/PageNotFound'));

const Routes = () => {

    const dispatch = useDispatch();

    const { token, authenticated } = useSelector(({ auth }) => auth);

    const authCheck = useCallback(() => dispatch(actions.authCheck(token)), [dispatch, token]);

    useEffect(() => {
        authCheck();
        console.log('[ROUTES] useEffect')
    }, [authCheck]);

    baseApi.interceptors.request.use(
        (config) => {
            if (token) {
                config.headers['Authorization'] = token;
            }

            return config;
        },
        (error) => {
            Promise.reject(error);
        }
    );

    baseApi.interceptors.response.use(
        (response) => {
            return Promise.resolve(response);
        },
        (error) => {
            if (
                (error.response.status === 401 || error.response.status === '401')
            ) {
                localStorage.removeItem("key");
                window.location = "/"
            }
            return Promise.reject(error);
        }
    );

    console.log("[ROUTES] Rendering..");

    return (
        <React.Fragment>
            <Switch>
                <Route path="/login" exact render={() => <Login />} />
                <PrivateRoute path="/" authenticated={authenticated} exact component={Dashboard} />

                <PrivateRoute path="/movies/create" authenticated={authenticated} exact component={MovieCreate} />
                <PrivateRoute path="/movies" authenticated={authenticated} exact component={Movies} />
                
                <PrivateRoute path="/actors" authenticated={authenticated} exact component={Actors} />
                <Route path="*" render={() => <NotFound />} />
            </Switch>
        </React.Fragment>
    );
}

export default Routes;

