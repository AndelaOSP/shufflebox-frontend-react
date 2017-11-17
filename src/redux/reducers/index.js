import { combineReducers } from 'redux';
import {
  previousCandidatesReducer,
  nextBrownbagReducer,
  ongoingCandidatesReducer,
  skippedBrownBagReducer
} from './brownbagReducer';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { modalReducer } from './modalReducer';
import apiCallReducer from './apiCallReducer';
import userReducer from './userReducer';

const config = {
  key: 'root',
  storage
};

const rootReducer = persistCombineReducers(config, {
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
