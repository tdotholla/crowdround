import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import ventureReducer from './venture'
import investorReducer from './investor'
import mentorReducer from './mentor'

export function makeRootReducer(asyncReducers) {
  return combineReducers({
    // Add sync reducers here
    firebaseReducer,
    venture: ventureReducer,
    investor: investorReducer, 
    mentor: mentorReducer,
    ...asyncReducers
  })
}

export function injectReducer(store, { key, reducer }) {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer