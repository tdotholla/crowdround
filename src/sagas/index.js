import { all } from "redux-saga/effects";

//Watchers
import authSaga from "./auth";
import initSaga from "./init";
import membersSaga from "./members";
import investorsSaga from "./investors";
import mentorsSaga from "./mentors";
import venturesSaga from "./ventures";


export default function* rootSaga() {
  yield all([ authSaga(), initSaga(), membersSaga(), investorsSaga(), mentorsSaga(), venturesSaga() 
  ]);
}