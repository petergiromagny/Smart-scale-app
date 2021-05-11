import {
  EDIT_HEIGHT,
  EDIT_WEIGHT,
  EDIT_OBJ_WEIGHT,
  ADD_OBJ,
} from '../Actions/objAction';

const initialState = [{ height: 0 }, { weight: 0 }, { objWeight: 0 }];

function objReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_OBJ:
      return {
        height: action.height,
        weight: action.weight,
        objWeight: action.objWeight,
      };
    case EDIT_HEIGHT:
      return {
        height: action.payload,
      };
    case EDIT_WEIGHT:
      return {
        weight: action.payload,
      };
    case EDIT_OBJ_WEIGHT:
      return {
        objWeight: action.payload,
      };

    default:
      return state;
  }
}

export default objReducer;
