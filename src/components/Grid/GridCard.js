import React from 'react';
import Layout from '../Layout/Layout'
import { Grid, Card, useTheme } from '@material-ui/core';

const GridCard = ({children, ...rest}) => {

    const theme = useTheme();

    return (
        <Grid
            item
            {...rest}
        >
            <Card elevation={1}>
                {children}
            </Card>
        </Grid>
    );
}

export default React.memo(GridCard);
