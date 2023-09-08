import moment from 'moment';
import types from '../../../constants/action-types';

var today = moment();
var yesterday = moment(today).subtract(1, 'days');

const defaultState = {
  selectedDate: [],
  determinedDate: '',
  singleDate: today.format('YYYY-MM-DD'),
  hideRange: true,
};

const map = {
  [types.SET_SELECTED_DATE]: (state, { payload }) => ({
    ...state,
    selectedDate: payload,
  }),
  [types.SET_SINGLE_DATE]: (state, { payload }) => ({
    ...state,
    singleDate: payload,
  }),
  [types.SET_DETERMINED_DATE]: (state, { payload }) => ({
    ...state,
    determinedDate: payload,
  }),
  [types.CLEAR_SELECTED_DATE]: (state) => ({
    ...state,
    selectedDate: [],
  }),
  [types.HIDE_RANGE_PICKER_IN_group]: (state, { payload }) => ({
    ...state,
    hideRange: payload,
  }),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
