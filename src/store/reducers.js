import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import VenturesReducer from './venture'
import InvestorsReducer from './investor'
import MentorsReducer from './mentor'
import FormsReducer from './forms'
import MemberReducer from './member'
import AppReducer from "./app";

export function makeRootReducer(asyncReducers) {
  return combineReducers({
    // Add sync reducers here
    firebaseReducer,
    app: AppReducer,
  member: MemberReducer,
  forms: FormsReducer,
  ventures: VenturesReducer,
      investors: InvestorsReducer, 
    mentors: MentorsReducer,
    ...asyncReducers
  })
}

export function injectReducer(store, { key, reducer }) {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer


