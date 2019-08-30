
import { SOCIAL_SHAPE } from './app'
//Actions
import {UPDATE_FORMS_ASPECT, UPDATE_FORMS_REDUCER, RESET_FORMS} from "./../actions";

//SHAPE 
const INITIAL_STATE = {
  status: null, //isUpdating, isCreating, isDeleting
  errors: null,
  values: {},
  formName: "",
  name: "",
  social: SOCIAL_SHAPE,
}


function FormsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    //Generic Updates
    case UPDATE_FORMS_ASPECT: {
      return { ...state, [`${action.aspect}`]: action.payload };
    }

    case UPDATE_FORMS_REDUCER: {
      return { ...state, ...action.payload };
    }

    case RESET_FORMS: {
      return { ...state, ...INITIAL_STATE };
    }

    default:
      return state;
  }
}

export default FormsReducer;
