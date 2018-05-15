import { handleActions } from 'redux-actions';
import * as actions from '../actions/actions';

const initialState = {
    title: 'Location',
    latitude: null,
    longitude: null,
}

const locationReducer = handleActions({
    [actions.setLocation]: (state, action) => (
        {...state,
            latitude: action.payload.latitude,
            longitude: action.payload.longitude
        }
    )
},initialState);

export default locationReducer;