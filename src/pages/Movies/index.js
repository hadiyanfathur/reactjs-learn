import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { 
    CardHeader, 
    Avatar, 
    IconButton,
    CardContent,
    Typography,
    Button,
    CardActions,
    Grid
 } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import GridCard from "../../components/Grid/GridCard";
import GridItem from "../../components/Grid/GridItem";
import * as actions from '../../store/actions';

const Movies = () => {
    const DEFAULT_PAGE_LENGTH = 10;

    const [page, setPage] = useState(1);
    const [params, setParams] = useState(null);
    const [totalPage, setTotalPage] = useState(1);

    const location = useLocation();

    const dispatch = useDispatch();

    const { count, data, loading, error } = useSelector(({ movies }) => movies)

    const fetchMovies = useCallback(() => {
            const params = new URLSearchParams(location.search);
            
            dispatch(actions.fetchMovies({
                page,
                per_page: DEFAULT_PAGE_LENGTH,
            }))
            console.log('[MOVIE] Rendering');
            setParams(params);
        },
        [location, page, dispatch],
    )
    
    useEffect(() => {
        fetchMovies();
    }, [fetchMovies])

    useEffect(() => {
        if (!count) {
            return setTotalPage(0);
        }
        const totalPage = Math.ceil(count / DEFAULT_PAGE_LENGTH);
        setTotalPage(totalPage);
        
    }, [count]);

    const showMoreOnClicked = () => {
        setPage(page + 1);
    }
    
    return (
        <React.Fragment>
            <Grid item container >
                    <Button
                        variant="contained"
                        color="primary"
                        elevation={4}
                        component={NavLink} 
                        to='/movies/create'
                    >
                        Add Movie
                    </Button>
            </Grid>
            {data && !error ? 
                ( data.length ? data.map((mov, index) => (
                    <GridCard sm={6} xs={12} md={4} key={index}>
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
                            title={mov.title}
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
                ))
                    : <GridCard xs={12}>
                        EMPTY DATA
                    </GridCard>
                )
            : 
                    <GridItem xs={12}>
                        SomeThingWrong
                    </GridItem>
            }
            {data && !error && data.length && (page < totalPage) ?
                <Grid item container xs={12} justify='center'>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={showMoreOnClicked}
                    >
                        Show More
                    </Button>
                </Grid>
                : null
            }
            
        </React.Fragment>
    );
}

export default React.memo(Movies);
