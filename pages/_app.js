import React from 'react'
import ReactDom from 'react-dom'
import Head from 'next/head'
import App from 'next/app'
import store from './../src/store/createStore'
import withReduxStore from './../src/store/with-redux-store'
import withRedux from 'next-redux-wrapper'
import {Provider} from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './../src/Style/theme';
import {createStore} from 'redux';


class MyApp extends App {
	// static async getInitialProps({ Component, ctx }) {
    
    
	// 	return {
	// 		pageProps: {
	// 			// Call page-level getInitialProps
	// 			...(Component.getInitialProps
	// 				? await Component.getInitialProps(ctx)
	// 				: {})
	// 		}
	// 	}
	// }

	componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');

		if (process.env.NODE_ENV !== 'production') {
			// const axe = require('react-axe')
			// axe(React, ReactDom, 1000)
		}
	}

	render() {
    const { Component, pageProps, reduxStore } = this.props
		return (
				<ThemeProvider theme={theme}>
						<Provider store={reduxStore}>
					<CssBaseline />
							<Component {...pageProps} />
						</Provider>
				</ThemeProvider>
		)
	}
}

export default withReduxStore(MyApp);