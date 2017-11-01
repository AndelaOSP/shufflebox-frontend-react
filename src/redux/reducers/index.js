import {combineReducers} from 'redux';
import {
  brownbagReducer,
  previousCandidatesReducer,
  nextBrownbagReducer,
  ongoingCandidatesReducer
} from './brownbagReducer';
import {modalReducer} from './modalReducer';

const rootReducer = combineReducers({
  brownbag: combineReducers({
    previous: previousCandidatesReducer,
    next: nextBrownbagReducer,
    ongoing: ongoingCandidatesReducer,
  }),
  modal: modalReducer,
  secretSanta: {}
});

export default rootReducer;
