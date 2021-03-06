import { handleActions } from 'redux-actions';
import * as actions from '../actions/actions'

const initialState = {
    title: 'People',
    people: []
}

const peopleReducer = handleActions({
    [actions.setPeople]: (state, action) => (
        {...state, 
            people: action.payload
        }
    )
},initialState);

export default peopleReducer;