import React from 'react';
import Layout from '../Layout/Layout'
import { Grid, Card, useTheme } from '@material-ui/core';

const GridItem = ({children, ...rest}) => {

    const theme = useTheme();

    return (
        <Grid
            item
            {...rest}
        >
            <Card >
                {children}
            </Card>
        </Grid>
    );
}

export default React.memo(GridItem);
