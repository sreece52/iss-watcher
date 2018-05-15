import { handleActions } from 'redux-actions';

const initialState = {
    title: 'Location',
    location: []
}

const locationReducer = handleActions({},initialState);

export default locationReducer;