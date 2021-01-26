export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const emailRegex =
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

export const usernameRegex = /^[a-z0-9_-]+$/;

export const YEAR_DATA = [
    { id: 2020, name: '2020' },
    { id: 2019, name: '2019' },
    { id: 2018, name: '2018' },
    { id: 2017, name: '2017' },
    { id: 2016, name: '2016' },
    { id: 2015, name: '2015' },
    { id: 2014, name: '2014' },
    { id: 2013, name: '2013' },
    { id: 2012, name: '2012' },
    { id: 2011, name: '2011' },
    { id: 2010, name: '2010' },
];
