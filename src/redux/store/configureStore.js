import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import { persistStore } from 'redux-persist';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        apiMiddleware,
        thunk,
        reduxImmutableStateInvariant(),
        logger,
      ),
    ),
  );

  const persistor = persistStore(store);
  return { store, persistor };
}
