import {combineReducers} from 'redux';
import {brownbagReducer, previousCandidatesReducer, skippedCandidatesReducer} from './brownbagReducer';

const rootReducer = combineReducers({
  brownbagReducer,
  previousCandidatesReducer,
  skippedCandidatesReducer
});

export default rootReducer;
