import 'isomorphic-fetch'
import React from 'react'
import { Container, Typography, Divider } from '@material-ui/core';

import CrowdStepper from '../src/components/CrowdStepper';
import VentureList from './../src/components/Ventures/VentureList'
import InvestorList from './../src/components/Investors/InvestorList'
import MentorList from './../src/components/Mentors/MentorList'

const Index = ({ stars }) => (
	<Container>
    <Typography variant="h1" align="center">Welcome to the Crowd Round!</Typography>
    <Typography variant="subtitle1" align="center">Raise funds to achieve the next milestone in your business.</Typography>
    <Divider variant="middle"/>
		
    <CrowdStepper />
    <VentureList />
    <InvestorList />
    <MentorList />
	</Container>
)

// Index.getInitialProps = async () => {
// 	const res = await fetch(
// 		'https://api.github.com/repos/tdotholla/mobb_v0'
// 	)
// 	const json = await res.json()
// 	return { stars: json.stargazers_count }
// }

export default Index
