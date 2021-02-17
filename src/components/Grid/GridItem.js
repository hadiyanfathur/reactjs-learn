import React from 'react';
import Layout from '../Layout/Layout'
import { Grid, Paper, useTheme } from '@material-ui/core';

const GridItem = ({children, style, ...rest}) => {

    const theme = useTheme();

    const styles = {
        padding : theme.spacing(3),
        ...style
    }

    return (
        <Grid
            item
            component={Paper}
            style={styles}
            {...rest}
        >
            {children}
        </Grid>
    );
}

export default React.memo(GridItem);
