import React, { createContext, useReducer } from 'react'
import { ADD_CAMPAIGN, REMOVE_CAMPAIGN, UPDATE_CAMPAIGN, FETCH_CAMPAIGNS, FETCH_CAMPAIGN } from '../actions'


export const CampaignContext = createContext()

const CampaignProvider = ({ children }) => {
	const [campaigns, dispatch] = useReducer((state, action) => {
		const { type, aspect, payload } = action 

		switch (type) {
			case FETCH_CAMPAIGN: 
				// const blah = await blah
				// return onceGetCampaign(payload)
				return
			case FETCH_CAMPAIGNS: 
				// const blah = async onceGetCampaigns(aspect) => {}
				// return blah
				return 
			case ADD_CAMPAIGN:
				return [
					...state,
					{
						id: createRandomId(),
						data,
						processComplete: false
					}
				]
			case UPDATE_CAMPAIGN:
				const campaignIndex = state.findIndex(({ id }) => id === payload.id)
				return [
					...state.slice(0, campaignIndex),
					{ ...payload, processComplete: !payload.processComplete },
					...state.slice(campaignIndex + 1)
				]
			case REMOVE_CAMPAIGN:
				return state.filter(t => t !== payload)
			default:
				return state
		}
	}, [])

	const addCampaign = data => dispatch({ type: ADD_CAMPAIGN, data })

	const removeCampaign = campaign => dispatch({ type: REMOVE_CAMPAIGN, campaign })

	const updateCampaign = campaign => dispatch({ type: UPDATE_CAMPAIGN, campaign })

	const fetchCampaigns = filter => dispatch({ type: FETCH_CAMPAIGNS, filter })

	const fetchCampaign = id => dispatch({ type: FETCH_CAMPAIGN, id })

	return (
		<CampaignContext.Provider value={{ fetchCampaigns, fetchCampaign, addCampaign, removeCampaign, updateCampaign, campaigns }}>
			{children}
		</CampaignContext.Provider>
	)
}

export default CampaignProvider
