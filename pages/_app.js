import React from 'react'
import ReactDom from 'react-dom'
import Head from 'next/head'
import App from 'next/app'
import store from './../src/store/createStore'
import withRedux from 'next-redux-wrapper'
import Provider from '../src/contexts'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './../src/Style/theme';


class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: {
				// Call page-level getInitialProps
				...(Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {})
			}
		}
	}

	componentDidMount() {
		if (process.env.NODE_ENV !== 'production') {
			const axe = require('react-axe')
			axe(React, ReactDom, 1000)
		}
	}

	render() {
		const { Component, pageProps } = this.props

		return (
			<>
				<Head>
					<title>The Crowd Round</title>
				</Head>
				<ThemeProvider theme={theme}>
					<CssBaseline>
						<Provider>
							<Component {...pageProps} />
						</Provider>
					</CssBaseline>
				</ThemeProvider>
			</>
		)
	}
}

export default withRedux(store)(MyApp)