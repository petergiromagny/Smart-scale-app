export const TOGGLE_VEGETABLES = 'vegetables/toggle';
export const TOGGLE_FRUITS = 'fruits/toggle';
export const TOGGLE_MEATS = 'meats/toggle';

export const toggleVegetables = (payload) => ({
  type: TOGGLE_VEGETABLES,
  payload,
});

export const toggleFruits = (payload) => ({
  type: TOGGLE_FRUITS,
  payload,
});

export const toggleMeats = (payload) => ({
  type: TOGGLE_MEATS,
  payload,
});
