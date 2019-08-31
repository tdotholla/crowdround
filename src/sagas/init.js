import { takeEvery } from "redux-saga/effects";

//Actions
import { INIT_APP }from "./../actions";

//Auth
function* handleInit(action) {
  switch (action.aspect) {
    case "init": {
      //
      break;
    }
    default: {
      yield;
    }
  }
}

export default function* initSaga() {
  yield takeEvery(INIT_APP, handleInit);
}
