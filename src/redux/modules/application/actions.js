import types from "../../../constants/action-types";

export const setgroupId = (payload) => ({
  type: types.APPLICATION_SET_group_ID,
  payload,
});
export const setgroups = (payload) => ({
  type: types.APPLICATION_SET_groupS,
  payload,
});

export const setRegions = (payload) => ({
  type: types.APPLICATION_SET_REGIONS,
  payload,
});
export const setCategories = (payload) => ({
  type: types.APPLICATION_SET_CATEGORIES,
  payload,
});
export const setObjects = (payload) => ({
  type: types.APPLICATION_SET_OBJECTS,
  payload,
});
export const fetchData = (payload) => ({
  type: types.APPLICATION_FETCH_COMMONS_DATA,
  payload,
});

export const setReportSubData = (payload) => ({
  type: types.APPLICATION_SET_SUB_DATA,
  payload,
});

export const setLoading = (payload) => ({
  type: types.APPLICATION_SET_LOADING,
  payload,
});

export const setUsers = (payload) => ({
  type: types.APPLICATION_SET_USERS,
  payload,
});
export const setActiveItem = (payload) => ({
  type: types.APPLICATION_ACTIVE_ITEM,
  payload,
});
