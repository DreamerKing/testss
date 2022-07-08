import { loginApi } from "@/services/user";
import { call, put, takeLatest } from "redux-saga/effects";
import { login } from "../slices/user";
import { userLoginAction } from "@/actions/user";

function* userLogin() {
  try {
    const user = yield call(loginApi);
    yield put(login(user));
  } catch (e) {}
}

function* mySaga() {
  yield takeLatest(userLoginAction.type, userLogin);
}

export default mySaga;
