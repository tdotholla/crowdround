// ------------------------------------
// Constants
// ------------------------------------
// export const VENTURE_CHANGE = 'VENTURE_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function ventureChange(venture = '/') {
  return {
    type: VENTURE_CHANGE,
    payload: venture
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => {
  return nextLocation => dispatch(ventureChange(nextLocation))
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null
export default function ventureReducer(state = initialState, action) {
  return action.type === VENTURE_CHANGE ? action.payload : state
}