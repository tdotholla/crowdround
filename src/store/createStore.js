import { applyMiddleware, compose, createStore } from 'redux'
import logger from "redux-logger";

import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth' 
import 'firebase/storage'
import createSagaMiddleware from "redux-saga";

import makeRootReducer from './reducers'
import {fbConfig, rrfConfig } from './../config'
import rootSaga from './../sagas'
import withRedux from 'next-redux-wrapper'
export default (initialState = {}) => {

  
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [
    sagaMiddleware,
    // reactReduxFirebase(firebase, rrfConfig),
  ]
  const devMiddleware = [
    ...middleware,
    logger
  ]

  // ======================================================
  // Firebase Initialization
  // ======================================================
  !firebase.apps.length ? 
    firebase.initializeApp(fbConfig) : firebase.app()

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================

  const store = 
    process.env.NODE_ENV === "production"
    ? createStore(
      makeRootReducer(),
      compose(applyMiddleware(...middleware))
      )
    : createStore(
      makeRootReducer(),
      // INJECTED_APP_STATE,
      compose(
        applyMiddleware(...devMiddleware)
      )
    );
  
  sagaMiddleware.run(rootSaga)

  // store.asyncReducers = {}

  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     const reducers = require('./reducers').default
  //     store.replaceReducer(reducers(store.asyncReducers))
  //   })
  // }

  return withRedux(store)
}

