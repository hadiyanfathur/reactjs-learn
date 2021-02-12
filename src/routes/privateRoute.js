import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
    console.log("IS AUTH PRIVATE ROUTE : " + authenticated);
    return (
        <Layout>
            <Route
                {...rest}
                render={(props) => (authenticated === false ? <Redirect to="/login" /> : <Component {...props} />)}
            />
        </Layout>
    );
}
export default React.memo(PrivateRoute);