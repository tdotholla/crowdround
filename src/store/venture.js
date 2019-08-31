import { SOCIAL_SHAPE } from './app'
//Actions
import { UPDATE_VENTURE} from "./../actions";

//SHAPE 
const INITIAL_STATE = {
  _id: "", 
  name: "",
  social: SOCIAL_SHAPE,
  campaigns: [],
  mentees: [],
  followers: []
}


function VentureReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    //Generic Updates
    
    default:
      return state;
  }
}

export default VentureReducer;
