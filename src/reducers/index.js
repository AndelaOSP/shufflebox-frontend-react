import {combineReducers} from 'redux';
import {
  brownbagReducer, 
  previousCandidatesReducer, 
  skippedCandidatesReducer
} from './brownbagReducer';
import {
  confirmModalReducer
} from './confirmModalReducer';
const rootReducer = combineReducers({
  brownbagReducer,
  previousCandidatesReducer,
  skippedCandidatesReducer,
  confirmModalReducer
});

export default rootReducer;
