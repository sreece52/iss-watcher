import * as peopleResource from "./resources/peopleResources";

import { createAction } from 'redux-actions';

export const setPeople = createAction("GET_PEOPLE");

export const getPeople = () => (
    dispatch => peopleResource.getPeople().then((res) => {
        dispatch(setPeople(res.data.people));
    }).catch((err) => {
        console.log(err);
    })
)