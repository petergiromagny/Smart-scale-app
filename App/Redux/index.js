import { createStore, combineReducers } from 'redux';

import objReducer from './Reducers/objReducer';
import favoritesReducer from './Reducers/favoritesReducer';

const store = createStore(
  combineReducers({
    objectives: objReducer,
    favorites: favoritesReducer,
  })
);

store.subscribe(() => console.log(store.getState()));

export default store;
