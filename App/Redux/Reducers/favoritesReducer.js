import {
  ADD_FRUITS,
  EDIT_FRUITS,
  ADD_VEGETABLES,
  EDIT_VEGETABLES,
  ADD_MEATS,
  EDIT_MEATS,
} from '../Actions/favoritesAction';

const initialState = [
  { fruits: ['strawberry', 'apple', 'banana'] },
  { vegetables: ['broccoli', 'cucumber'] },
  { meats: ['beef', 'turkey', 'chicken'] },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRUITS:
      return {
        fruits: action.payload,
      };
    case EDIT_FRUITS:
      return {
        fruits: [...state, action.payload],
      };
    case ADD_VEGETABLES:
      return {
        vegetables: action.payload,
      };
    case EDIT_VEGETABLES:
      return {
        vegetables: [...state, action.payload],
      };
    case ADD_MEATS:
      return {
        meats: action.payload,
      };
    case EDIT_MEATS:
      return {
        meats: [...state, action.payload],
      };

    default:
      return state;
  }
};
