import { takeLatest, put, delay } from "redux-saga/effects";
import types from "../../../constants/action-types";
import { setData, setError, setTotal, setLoading } from "./actions";
import service from "../../../services/reports";
import { dataSelector } from "./selectors";

function* fetchWData({ payload }) {
  try {
    if (payload?.isSearch) yield delay(500);
    yield put(setLoading(true));
    const res = yield service.getCharts(payload?.query, payload?.lng);
    // const { data, total } = dataSelector(res);
    yield put(setError(""));
    yield put(setData(res));
    // yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    console.log("error", error);
    yield put(setError(error.message));
  }
}

function* onSearch({ payload }) {
  yield delay(500);
}

export default function* worksSaga() {
  yield takeLatest(types.SET_PAGE_WORKS_FETCH_DATA, fetchWData);
  yield takeLatest(types.PAGE_WORKS_SAGA_ONSEARCH_ACTION, onSearch);
}
