import types from '../../../constants/action-types';

const defaultState = {
  open: false,
  search: '',
};

const map = {
  [types.SET_OPEN]: (state, { payload }) => ({
    ...state,
    open: payload,
  }),
  [types.SET_SEARCH]: (state, { payload }) => ({
    ...state,
    search: payload,
  }),
};

export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
