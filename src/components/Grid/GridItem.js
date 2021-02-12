import React from 'react';
import Layout from '../Layout/Layout'
import { Typography, Grid, Paper, useTheme } from '@material-ui/core';

const GridItem = ({children, ...rest}) => {

    const theme = useTheme();

    return (
        <Grid
            item
            {...rest}
        >
            <Paper elevation={1} style={{ padding:theme.spacing(3) }}>
                {children}
            </Paper>
        </Grid>
    );
}

export default React.memo(GridItem);
