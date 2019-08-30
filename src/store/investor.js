
import { SOCIAL_SHAPE } from './app'
//Actions
import { UPDATE_INVESTOR} from "./../actions";

//SHAPE 
const INITIAL_STATE = {
  _id: "", 
  name: "",
  social: SOCIAL_SHAPE,
  campaigns: [],
  totalInvested: 0
}


function InvestorReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    //Generic Updates
    
    default:
      return state;
  }
}

export default InvestorReducer;
