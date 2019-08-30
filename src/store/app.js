import {UPDATE_APP_ASPECT, UPDATE_APP_REDUCER, RESET_APP} from "../actions";

export const SOCIAL_SHAPE = {www: "", li: "", fb: "", ig: ""};

const defaultScheme = ["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#a4de6c", "#ffc658"];

//SHAPE
const INITIAL_STATE = {
  isSubmitting: false,
  didSubmit: false,
  errors: {},
  values: {},
  formName: "",
  scheme: defaultScheme,
  mode: "light",
  snackbarOpen: false,
  snackbarMessage: "",
  snackbarVariant: ""
}

const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //Generic Updates
    case UPDATE_APP_ASPECT: {
      return { ...state, [`${action.aspect}`]: action.payload };
    }

    case UPDATE_APP_REDUCER: {
      return { ...state, ...action.payload };
    }
    case RESET_APP: {
      return { ...state, ...INITIAL_STATE };
    }
    //Specific Updates

    default:
      return state;
  }
}

export default AppReducer;

