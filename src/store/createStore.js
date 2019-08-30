import { applyMiddleware, compose, createStore } from 'redux'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth' 
import 'firebase/storage'
import createSagaMiddleware from "redux-saga";

import makeRootReducer from './reducers'
import {fbConfig, rrfConfig } from './../config'
import rootSaga from './../sagas'

export default (initialState = {}) => {

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []

  if (process.env.NODE_ENV === 'local') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  // ======================================================
  // Middleware Configuration
  // ======================================================
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [
    sagaMiddleware
    // This is where you add other middleware like redux-observable
  ]

  // ======================================================
  // Firebase Initialization
  // ======================================================
  !firebase.apps.length ? 
    firebase.initializeApp(fbConfig) : firebase.app()

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      reactReduxFirebase(firebase, rrfConfig),
      ...enhancers
    )
  )
  sagaMiddleware.run(rootSaga)

  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

