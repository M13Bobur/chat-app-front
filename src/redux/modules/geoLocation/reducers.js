import types from "../../../constants/action-types";

const defaultState = {
  latLang: "",
};

const map = {
  [types.SET_GEOLOCATION]: (state, { payload }) => ({
    ...state,
    latLang: payload,
  }),
  [types.CLEAR_GEOLOCATION]: (state) => ({
    ...state,
    latLang: "",
  }),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
