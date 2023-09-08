import types from "../../../constants/action-types";

const defaultState = {
  token: localStorage.getItem("access_token"),
  role: localStorage.getItem("role"), // supervisor, admin, governor, secretary
  userId: localStorage.getItem("user_id"),
  username: localStorage.getItem("username"),
  fullname: localStorage.getItem("fullname"),
  groupId: localStorage.getItem("groupId"),
  regionId: localStorage.getItem("regionId"),
  provinceId: localStorage.getItem("provinceId"),
};

const map = {
  [types.SET_TOKEN]: (state, { payload }) => ({
    ...state,
    token: payload,
  }),
  [types.SET_ROLE]: (state, { payload }) => ({
    ...state,
    role: payload,
  }),
  [types.SET_USERNAME]: (state, { payload }) => ({
    ...state,
    username: payload,
  }),
  [types.SET_FULLNAME]: (state, { payload }) => ({
    ...state,
    fullname: payload,
  }),
  [types.SET_REGION_ID]: (state, { payload }) => ({
    ...state,
    regionId: payload,
  }),
  [types.SET_PROVINCE_ID]: (state, { payload }) => ({
    ...state,
    provinceId: payload,
  }),
  [types.SET_group_ID]: (state, { payload }) => ({
    ...state,
    groupId: payload,
  }),
  [types.CLEAR_TOKEN]: (state) => ({
    ...state,
    token: undefined,
  }),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
