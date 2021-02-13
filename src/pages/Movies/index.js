import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
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
import * as actions from '../../store/actions';

const Movies = () => {
    const DEFAULT_PAGE_LENGTH = 10;

    const [page, setPage] = useState(1);
    const [params, setParams] = useState(null);

    const location = useLocation();

    const dispatch = useDispatch();

    const { count, data } = useSelector(({ movies }) => movies)
    
    console.log('[MOVIE] Rendering');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        
        dispatch(actions.fetchMovies({
            page,
            pageLength: DEFAULT_PAGE_LENGTH,
        }))

        setParams(params);
    }, [location, page, dispatch])
    
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
