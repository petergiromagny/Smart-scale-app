export const ADD_CALORY = 'calory/add';
export const EDIT_CALORY = 'calory/edit';

export const addAction = (val) => ({
  type: ADD_CALORY,
  payload: val,
});

export const editAction = (val) => ({
  type: EDIT_CALORY,
  payload: val,
});
