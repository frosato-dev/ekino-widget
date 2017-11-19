import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { wrapStore, alias } from 'react-chrome-redux'
import { routerReducer as router, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { reactReduxFirebase, firebaseStateReducer, getFirebase } from 'react-redux-firebase'

import reducers from './reducers'
import aliases from './aliases'
import { portName, firebaseConfig } from './../../core/config'
import history from './../../core/history'

const middleware = [
    routerMiddleware(history), // Build the middleware for intercepting and dispatching navigation actions,
    alias(aliases), // Aliases for react-chrome-redux
    thunk.withExtraArgument(getFirebase) // Allow async actions
]

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 })

const enhancer = composeEnhancers(applyMiddleware(...middleware))

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebaseConfig, { userProfile: 'users' })
)(createStore)

const store = createStoreWithFirebase(
    combineReducers({
        firebase: firebaseStateReducer,
        ...reducers,
        router
    }),
    enhancer
)

wrapStore(store, { portName })
