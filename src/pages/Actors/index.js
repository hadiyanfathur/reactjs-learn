import React from 'react';
import { Typography } from '@material-ui/core';
import GridItem from "../../components/Grid/GridItem";

const Actors = () => {
    console.log('[Actors] Rendering...');
    return (
            <GridItem>
                <Typography paragraph>
                    This Actors
                </Typography>
            </GridItem>
    );
}

export default React.memo(Actors);
