
//SHAPE 
const INITIAL_STATE = {
  processComplete: null, //isUpdating, isCreating, isDeleting

  errors: null,
  values: {},
  formName: "",

  name: "",
  social: SOCIAL_SHAPE,
}


const addCampaign = data => dispatch({ type: ADD_CAMPAIGN, data })

const removeCampaign = campaign => dispatch({ type: REMOVE_CAMPAIGN, campaign })

const updateCampaign = campaign => dispatch({ type: UPDATE_CAMPAIGN, campaign })

const fetchCampaigns = filter => dispatch({ type: FETCH_CAMPAIGNS, filter })

const fetchCampaign = id => dispatch({ type: FETCH_CAMPAIGN, id })

