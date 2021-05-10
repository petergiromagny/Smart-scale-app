import { ADD_CALORY, EDIT_CALORY } from '../Actions/caloryAction';

const initialState = { objective: 0 };

function caloryReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CALORY:
      return {
        objective: action.payload,
      };
    case EDIT_CALORY:
      return {
        objective: action.payload,
      };

    default:
      return state;
  }
}

export default caloryReducer;
