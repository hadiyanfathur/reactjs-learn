import React from 'react';
import Layout from '../Layout/Layout'
import { Grid, Card, useTheme } from '@material-ui/core';

const GridCard = ({children, ...rest}) => {

    const theme = useTheme();

    return (
        <Grid
            item
            component={Card}
            elevation={1}
            {...rest}
        >
            {children}
        </Grid>
    );
}

export default React.memo(GridCard);
