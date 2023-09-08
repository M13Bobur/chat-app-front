import types from '../../../constants/action-types';

export const setModalWork = (payload) => ({
  type: types.SET_MODAL_WORK,
  payload,
});
export const setPage = (payload) => ({
  type: types.SET_PAGE,
  payload,
});
export const clearState = () => ({
  type: types.CLEAR_MODAL_WORK_STATE,
});
