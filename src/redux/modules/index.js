/* eslint-disable import/namespace */

import { combineReducers } from 'redux';
// import { all } from 'redux-saga/effects';
import * as reducers from './reducers';
// import * as sagas from './sagas';

export const rootReducer = combineReducers({ ...reducers });

// export function* rootSaga() {
//   yield all(Object.keys(sagas).map((key) => sagas[key]()));
// }
