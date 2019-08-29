import 'isomorphic-fetch'
import React from 'react'
import CrowdStepper from '../components/CrowdStepper';

const Index = ({ stars }) => (
	<>
		<CrowdStepper />
	</>
)

// Index.getInitialProps = async () => {
// 	const res = await fetch(
// 		'https://api.github.com/repos/tdotholla/mobb_v0'
// 	)
// 	const json = await res.json()
// 	return { stars: json.stargazers_count }
// }

export default Index
