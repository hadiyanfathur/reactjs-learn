import React from 'react';
import Layout from '../Layout/Layout'
import { Grid, Paper, useTheme } from '@material-ui/core';

const GridItem = ({
    children, 
    style, 
    elevation,
    ...rest}) => {

    const theme = useTheme();

    const styles = {
        padding : theme.spacing(1),
        ...style
    }

    return (
        <Grid
            item
            style={styles}
            {...rest}
        >
            <Paper elevation={elevation || 1} style={{width:'100%', padding : theme.spacing(3)}}>
                {children}
            </Paper>
        </Grid>
    );
}

export default React.memo(GridItem);
