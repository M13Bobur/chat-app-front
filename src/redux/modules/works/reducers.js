import types from "../../../constants/action-types";

const defaultState = {
  data: {},
  total: 0,
  error: "",
  loading: false,
};

const map = {
  [types.SET_PAGE_WORKS_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload,
  }),
  [types.PAGE_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload,
  }),
  [types.SET_NEW_WORKS_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload,
  }),
  [types.PAGE_WORKS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
  [types.CLEAR_NEW_WORKS_TOTAL]: (state) => ({
    ...state,
    total: 0,
  }),
};

// eslint-disable-next-line max-len
export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
