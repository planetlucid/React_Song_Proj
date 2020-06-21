import { createStore, applyMiddleware, combineReducers } from "redux";

//  async calls from back-end
import thunk from "redux-thunk";

import songs from './reducers/songs'

// state
const reducers = combineReducers({
  songs
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
