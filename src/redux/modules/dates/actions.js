import types from "../../../constants/action-types";

export const setSelectedDate = (payload) => ({
  type: types.SET_SELECTED_DATE,
  payload,
});

export const setSingleDate = (payload) => ({
  type: types.SET_SINGLE_DATE,
  payload,
});

export const setDeterminedDate = (payload) => ({
  type: types.SET_DETERMINED_DATE,
  payload,
});
export const hideRangePicker = (payload) => ({
  type: types.HIDE_RANGE_PICKER_IN_group,
  payload,
});
export const clearSelectedDate = () => {
  return {
    type: types.CLEAR_SELECTED_DATE,
  };
};
