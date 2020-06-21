import {
    createStore, 
    applyMiddleware,
    combineReducers
  } from 'redux';

//   async calls from back-end
  import thunk from 'redux-thunk';