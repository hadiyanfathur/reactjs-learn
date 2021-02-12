import React from 'react';
import { 
    CardHeader, 
    Avatar, 
    IconButton,
    CardContent,
    Typography,
    Button,
    CardActions
 } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import GridCard from "../../components/Grid/GridItem";

const Movies = () => {
    console.log('[MOVIE] Rendering');
    return (
        <GridCard sm={6} xs={12} md={4}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" >
                        H
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Hadiyan Fathur Rahman"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This Movie
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">show details</Button>
            </CardActions>
        </GridCard>
    );
}

export default React.memo(Movies);
