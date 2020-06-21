import { createStore, applyMiddleware, combineReducers } from "redux";

//  async calls from back-end
import thunk from "redux-thunk";

//  reducer
const songs = (state = [], action) => {
  switch (action.type) {
    case "GET_SONGS_SUCCESS":
      return action.songs;
    default:
      return state;
  }
};

// state
const reducers = combineReducers({
  songs: songs
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
