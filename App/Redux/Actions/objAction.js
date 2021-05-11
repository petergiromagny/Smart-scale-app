export const ADD_OBJ = 'obj/add';
export const EDIT_HEIGHT = 'height/edit';
export const EDIT_WEIGHT = 'weight/edit';
export const EDIT_OBJ_WEIGHT = 'objWeight/edit';

export const addObjAction = (height, weight, objWeight) => ({
  type: ADD_OBJ,
  height,
  weight,
  objWeight,
});

export const editHeightAction = (val) => ({
  type: EDIT_HEIGHT,
  payload: val,
});

export const editWeightAction = (val) => ({
  type: EDIT_WEIGHT,
  payload: val,
});

export const editObjWeightAction = (val) => ({
  type: EDIT_OBJ_WEIGHT,
  payload: val,
});
