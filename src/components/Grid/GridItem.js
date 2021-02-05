import React from 'react';
import Layout from '../Layout/Layout'
import { Typography, Grid, Paper, useTheme } from '@material-ui/core';

const GridItem = (props) => {

    const theme = useTheme();

    const {
        children,
        xs,
        sm,
        md,
        lg,
        xl
    } = { ...props };

    return (
        <Grid
            item
            xs={xs || false}
            sm={sm || false}
            md={md || false}
            lg={lg || false}
            xl={xl || false}
        >
            <Paper elevation={1} style={{ padding:theme.spacing(3) }}>
                {children}
            </Paper>
        </Grid>
    );
}

export default React.memo(GridItem);
