import types from '../../../constants/action-types';

const defaultState = {
  modalWork: {},
  page: 0,
};

const map = {
  [types.SET_MODAL_WORK]: (state, { payload }) => ({
    ...state,
    modalWork: payload,
  }),
  [types.SET_PAGE]: (state, { payload }) => ({
    ...state,
    page: payload,
  }),
  [types.CLEAR_MODAL_WORK_STATE]: (state, { payload }) => ({
    ...state,
    page: 0,
    modalWork: {},
  }),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
