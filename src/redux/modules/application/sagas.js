import { takeLatest, put, delay } from "redux-saga/effects";
import types from "../../../constants/action-types";
import {
  setgroups,
  setCategories,
  setRegions,
  setUsers,
  setObjects,
  setLoading,
} from "./actions";
import sectors from "../../../services/sectors";
import regions from "../../../services/regions";
import categories from "../../../services/categories";
import users from "../../../services/users";
import objects from "../../../services/objects";


function* fetchData() {
  const role = localStorage.getItem("role");
  try {
    yield put(setLoading(true));
    const sectorssData = yield sectors.getAll();
    yield put(setgroups(sectorssData));
    const catsData = yield categories.getAll();
    yield put(setCategories(catsData));
    const regionsData = yield regions.getAll();
    yield put(setRegions(regionsData));
    const objectsData = yield objects.getAll({ parent: null });
    yield put(setObjects(objectsData));
    if (role === "admin") {
      const usersData = yield users.getAll();
      yield put(setUsers(usersData));
    }
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log("error", error);
  }
}

export default function* commonsSaga() {
  yield takeLatest(types.APPLICATION_FETCH_COMMONS_DATA, fetchData);
}
