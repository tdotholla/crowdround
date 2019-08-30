import React from 'react'
import CampaignProvider from './campaign'


const Provider = props => <CampaignProvider {...props} />

// const Provider = props => (
// 	<CampaignProvider>
// 		<AnotherProvider {...props} />
// 	</CampaignProvider>
// ) 
export default Provider
