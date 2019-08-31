import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import VenturesReducer from './venture'
import InvestorsReducer from './investor'
import MentorsReducer from './mentor'
import FormsReducer from './forms'
import MemberReducer from './member'
import AppReducer from "./app";

export default () => combineReducers({
    // Add sync reducers here
    firebase: firebaseReducer,
    app: AppReducer,
  member: MemberReducer,
  forms: FormsReducer,
  ventures: VenturesReducer,
      investors: InvestorsReducer, 
    mentors: MentorsReducer
  })
