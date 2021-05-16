import {
  TOGGLE_FRUITS,
  TOGGLE_VEGETABLES,
  TOGGLE_MEATS,
} from '../Actions/favoritesAction';

const initialState = { vegetables: [], fruits: [], meats: [] };

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case TOGGLE_FRUITS:
      return {
        ...state,
        fruits: payload,
      };
    case TOGGLE_VEGETABLES:
      return {
        ...state,
        vegetables: payload,
      };
    case TOGGLE_MEATS:
      return {
        ...state,
        meats: payload,
      };

    default:
      return state;
  }
};
