import types from "../../../constants/action-types";

export const setGeoLocation = (payload) => ({
  type: types.SET_GEOLOCATION,
  payload,
});

export const clearGeoLocation = () => {
  return {
    type: types.CLEAR_GEOLOCATION,
  };
};
