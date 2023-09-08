import types from "../../../constants/action-types";

const defaultState = {
  groupId: null,
  tableIndex: null,
  groupTitle: ",",
  subData: [],
  categories: [],
  groups: [],
  regions: [],
  users: [],
  objects: [],
  loading: false,
  activeItem: "all",
};

const map = {
  [types.APPLICATION_SET_group_ID]: (state, { payload }) => ({
    ...state,
    groupId: payload.groupId,
    tableIndex: payload.index,
    groupTitle: payload.title,
  }),
  [types.APPLICATION_SET_SUB_DATA]: (state, { payload }) => ({
    ...state,
    subData: payload,
  }),
  [types.APPLICATION_ACTIVE_ITEM]: (state, { payload }) => ({
    ...state,
    activeItem: payload,
  }),
  [types.APPLICATION_SET_CATEGORIES]: (state, { payload }) => ({
    ...state,
    categories: payload,
  }),
  [types.APPLICATION_SET_REGIONS]: (state, { payload }) => ({
    ...state,
    regions: payload,
  }),
  [types.APPLICATION_SET_OBJECTS]: (state, { payload }) => ({
    ...state,
    objects: payload,
  }),
  [types.APPLICATION_SET_groupS]: (state, { payload }) => ({
    ...state,
    groups: payload,
  }),
  [types.APPLICATION_SET_USERS]: (state, { payload }) => ({
    ...state,
    users: payload,
  }),
  [types.APPLICATION_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload,
  }),
};

// eslint-disable-next-line max-len
export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
