import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
// Your Redux slices
import portfolioReducer from './portfolioStore';
import graphReducer from './graphStore';

// Combine All reducers
const reducer = combineReducers({
  portfolioStore: portfolioReducer,
  graphStore: graphReducer,
})

// Exporting summed reducer
const store = configureStore({
  reducer,
});

export default store;
