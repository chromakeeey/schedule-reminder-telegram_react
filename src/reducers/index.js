import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import userReducer from './userReducer';
import languageReducer from './languageReducer';

const rootReducer = combineReducers({
  user: userReducer,
  language: languageReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));