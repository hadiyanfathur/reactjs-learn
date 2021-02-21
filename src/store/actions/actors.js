import React from 'react'
import { getCollectionApi } from '../../shared/baseApi'
import * as actionTypes from './actionTypes';

export const moviesStart = () => ({
    type: actionTypes.MOVIE_START
});

export const moviesSuccess = (data) => ({
    type: actionTypes.MOVIE_SUCCESS,
    data,

});

export const moviesFail = (error) => ({
    type: actionTypes.MOVIE_FAIL,
    error,
});

export const fetchMovies = ({
    ...query
}) => async (dispatch) => {
    dispatch(moviesStart());
    await getCollectionApi('/movies', {
        page: query.page,
        per_page: query.pageLength,
    })
    .then((res) => {
        const data = {
            ...res.data,
        };
        dispatch(moviesSuccess(data));
    })
    .catch((err) => {
        dispatch(
            moviesFail(
                err?.response?.data?.message || 'Sedang terjadi masalah pada server'
            )
        );
    });
}