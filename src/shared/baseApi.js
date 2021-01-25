import getEnv from './config';
import axios from 'axios';

export const baseApi = axios.create({
    baseURL: getEnv.API_URL + getEnv.API_VERSION,
});

export const defaultApi = axios.create({
    baseURL: getEnv.API_URL,
});

const body = {
    client_id: getEnv.clientId,
    client_secret: getEnv.clientSecret,
};

export const getCollectionApi = (path, params) =>
    baseApi.get(path, {
        params: {
            ...body,
            ...params,
        },
    });
