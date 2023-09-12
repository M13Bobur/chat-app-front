import types from "../../../constants/action-types";

export const setToken = (payload) => ({
  type: types.SET_TOKEN,
  payload,
});
export const setRole = (payload) => ({
  type: types.SET_ROLE,
  payload,
});
export const setUsername = (payload) => ({
  type: types.SET_USERNAME,
  payload,
});
export const setFullname = (payload) => ({
  type: types.SET_FULLNAME,
  payload,
});
export const setRegionId = (payload) => ({
  type: types.SET_REGION_ID,
  payload,
});
export const setProvinceId = (payload) => ({
  type: types.SET_PROVINCE_ID,
  payload,
});
export const setSectorId = (payload) => ({
  type: types.SET_SECTOR_ID,
  payload,
});
export const clearToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("role");
  localStorage.removeItem("fullname");
  return {
    type: types.CLEAR_TOKEN,
  };
};
