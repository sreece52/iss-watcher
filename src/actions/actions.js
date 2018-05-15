import * as issResources from "./resources/issResources";

import { createAction } from 'redux-actions';

export const setPeople = createAction("GET_PEOPLE");
export const setLocation = createAction("GET_LOCATION");


export const getPeople = () => (
    dispatch => issResources.getPeople().then((res) => {
        dispatch(setPeople(res.data.people));
    }).catch((err) => {
        console.log(err);
    })
);

export const getLocation = () => (
    dispatch => issResources.getLocation().then((res) => {
        dispatch(setLocation(res.data.iss_position));
    }).catch((err) => {
        console.log(err);
    })
)