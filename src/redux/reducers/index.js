import { combineReducers } from 'redux';
import {
  brownbagReducer,
  previousCandidatesReducer,
  nextBrownbagReducer,
  ongoingCandidatesReducer,
  skippedBrownBagReducer
} from './brownbagReducer';
import { modalReducer } from './modalReducer';
import apiCallReducer from './apiCallReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  brownbag: combineReducers({
    previous: previousCandidatesReducer,
    next: nextBrownbagReducer,
    ongoing: ongoingCandidatesReducer,
    skipped: skippedBrownBagReducer
  }),
  apiCallState: apiCallReducer,
  user: userReducer,
  modal: modalReducer,
  secretSanta: {}
});

export default rootReducer;
