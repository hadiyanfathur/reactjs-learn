import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
    console.log("IS AUTH PRIVATE ROUTE : " + authenticated);
    return (
        <Route
            {...rest}
            render={(props) => (authenticated === false ? <Redirect to="/login" /> : <Component {...props} />)}
        />
    );
}
export default React.memo(PrivateRoute);