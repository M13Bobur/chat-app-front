import types from '../../../constants/action-types';

export const setOpen = (payload) => ({
  type: types.SET_OPEN,
  payload,
});

export const setSearch = (payload) => ({
  type: types.SET_SEARCH,
  payload,
});
