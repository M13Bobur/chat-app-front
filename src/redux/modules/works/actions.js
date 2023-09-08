import types from "../../../constants/action-types";

export const setData = (payload) => ({
  type: types.SET_PAGE_WORKS_SET_DATA,
  payload,
});

export const setTotal = (payload) => ({
  type: types.SET_NEW_WORKS_TOTAL,
  payload,
});
export const setError = (payload) => ({
  type: types.PAGE_WORKS_ERROR,
  payload,
});
export const setLoading = (payload) => ({
  type: types.PAGE_SET_LOADING,
  payload,
});
export const fetchWData = (payload) => ({
  type: types.SET_PAGE_WORKS_FETCH_DATA,
  payload,
});

export const onSearch = (payload) => ({
  type: types.PAGE_WORKS_SAGA_ONSEARCH_ACTION,
  payload,
});
export const clearNewWorksTotal = (payload) => ({
  type: types.CLEAR_NEW_WORKS_TOTAL,
  payload,
});
