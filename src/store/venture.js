import { actionTypes } from "react-redux-firebase";
import { SOCIAL_SHAPE } from './app'
import { UPDATE_VENTURE } from "../actions";

// ------------------------------------
//============   Constants   ==========
// ------------------------------------
// export const VENTURE_CHANGE = 'VENTURE_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function ventureChange(venture = '/') {
  return {
    type: UPDATE_VENTURE,
    payload: venture
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
// export const updateLocation = ({ dispatch }) => {
//   return nextLocation => dispatch(ventureChange(nextLocation))
// }

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null
export default function VentureReducer(state = initialState, action) {
  return action.type === UPDATE_VENTURE ? action.payload : state
}
