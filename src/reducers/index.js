import {combineReducers} from 'redux';
import {brownbagReducer, previousCandidatesReducer} from './brownbagReducer';

const rootReducer = combineReducers({
  brownbagReducer,
  previousCandidatesReducer
});

export default rootReducer;