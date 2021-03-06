import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";

import songs from './reducers/songs'
import songFormData from './reducers/songFormData'


// state
const reducers = combineReducers({
  songs,
  songFormData
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
