
import { UPDATE_INVESTOR} from "./../actions";

import { SOCIAL_SHAPE } from './app'
//SHAPE 
const INITIAL_STATE = {
  authUser: null,
  selected: null,
  ventures: [],  
  isInvestor: false,
  isMentor: false,
  isSubmitting: false,
  errors: {},
  values: {},
  formName: "",
  name: "",
  social: SOCIAL_SHAPE,
}


function MemberReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    //Generic Updates
    
    default:
      return state;
  }
}

export default MemberReducer;
