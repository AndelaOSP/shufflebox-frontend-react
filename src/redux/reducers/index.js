import {combineReducers} from 'redux';
import {
  brownbagReducer,
  previousCandidatesReducer,
  nextBrownbagReducer,
  ongoingCandidatesReducer,
  skippedBrownBagReducer
} from './brownbagReducer';
import {modalReducer} from './modalReducer';

const rootReducer = combineReducers({
  brownbag: combineReducers({
    previous: previousCandidatesReducer,
    next: nextBrownbagReducer,
    ongoing: ongoingCandidatesReducer,
    skipped: skippedBrownBagReducer
  }),
  modal: modalReducer,
  secretSanta: {}
});

export default rootReducer;
