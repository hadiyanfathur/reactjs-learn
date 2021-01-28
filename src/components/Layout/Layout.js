import React from 'react';
import { CssBaseline, Typography, Container } from '@material-ui/core';

const Dashboard = ({children}) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                {children}
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            </Container>
        </React.Fragment>
    );
}

export default React.memo(Dashboard);
