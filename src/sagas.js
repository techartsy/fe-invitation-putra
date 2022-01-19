import { call, put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import { GET_ALL_GUEST } from "./store/constants/index";
import { getAllGuest } from "./domain/API";
import { setGuests } from "./store/actions";

function* doGetAllGuest() {
  try {
    const guestsData = yield call(getAllGuest);
    yield put(setGuests(guestsData.guests));
  } catch (error) {
    console.log(error);
  }
}

export default function* mySaga() {
  yield takeLatest(GET_ALL_GUEST, doGetAllGuest);
}
