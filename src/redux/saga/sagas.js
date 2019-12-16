import { takeLatest, put, all, delay } from "redux-saga/effects";

function* asyncAddTodo(action) {
  yield delay(1000);

  yield put({ type: "ADD_TODO", text: action.text });
}

export default function* root() {
  yield all([takeLatest("ASYNC_ADD_TODO", asyncAddTodo)]);
}
