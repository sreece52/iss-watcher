import peopleReducer from './peopleReducer';
import locationReducer from './locationReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    peopleReducer,
    locationReducer
});

export default rootReducer;