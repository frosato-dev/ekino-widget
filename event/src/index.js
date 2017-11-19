import { createStore, applyMiddleware, combineReducers } from 'redux'
import { wrapStore } from 'react-chrome-redux'
import { routerReducer as router, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'remote-redux-devtools'

import history from './../../core/history'
import reducers from './reducers'
import { portName } from './../../popup/src/config'

const middleware = [
    routerMiddleware(history) // Build the middleware for intercepting and dispatching navigation actions
]

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 })

const enhancer = composeEnhancers(applyMiddleware(...middleware))

const store = createStore(
    combineReducers({
        ...reducers,
        router
    }),
    enhancer
)

wrapStore(store, {
    portName
})
