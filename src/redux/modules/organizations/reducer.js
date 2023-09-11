import types from "../../../constants/action-types";

const initialState = {
  data_layout: true,
};

const map = {
  [types.DATA_LAYOUT]: (state, { payload }) => ({
    ...state,
    data_layout: payload,
  }),
};

export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  initialState;
