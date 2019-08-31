//Redux
import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "./reducers";
//Middleware
//Logger
import logger from "redux-logger";

//Sagas
import createSagaMiddleware from "redux-saga";
import rootSaga from "./../sagas";

// import Schemas from "./../api/schemas";

//Create Logger
const composeEnhancers = compose;

const sagaMiddleware = createSagaMiddleware();

//Create Store

export function initializeStore() {
  const store = 
    process.env.NODE_ENV === "production"
    ? createStore(
        createRootReducer(),
        applyMiddleware(sagaMiddleware)
      )
    : createStore(
        createRootReducer(),
        // INJECTED_APP_STATE,
        composeEnhancers(
          applyMiddleware(
            logger,
            sagaMiddleware
          )
        )
      );

  sagaMiddleware.run(rootSaga);
  
  return store
  }
