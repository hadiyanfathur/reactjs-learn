import React from 'react';
import { Typography } from '@material-ui/core';
import GridItem from "../../components/Grid/GridItem";

const Movies = () => {
    console.log('[MOVIE] Rendering');
    return (
            <GridItem>
                <Typography paragraph>
                    This Movie
                </Typography>
            </GridItem>
    );
}

export default React.memo(Movies);
