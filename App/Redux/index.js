import { createStore, combineReducers } from 'redux';

import caloryReducer from './Reducers/caloryReducer';
import favoritesReducer from './Reducers/favoritesReducer';

const store = createStore(
  combineReducers({
    calory: caloryReducer,
    favorites: favoritesReducer,
  })
);

store.subscribe(() => console.log(store.getState()));

export default store;
