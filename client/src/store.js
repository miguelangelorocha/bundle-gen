
import { createStore } from 'redux'
import { applyMiddleware, combineReducers, compose } from 'redux'

import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'

import { sagas as allBroadbandSagas } from './modules/all-broadband';
import { reducer as allBroadbandReducer } from './modules/all-broadband';


// SAGA
function* sagas() {
    yield [
      fork(allBroadbandSagas)
    ]
}

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(    
    sagaMiddleware
)  

const enhancers = [
    middleware
]  

// Redux Devtools Browser
const composeEnhancers =
typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

export const store = createStore(
      combineReducers({ 
        allBroadbandReducer  
      }),
      composeEnhancers(...enhancers)
    )

sagaMiddleware.run(sagas)    