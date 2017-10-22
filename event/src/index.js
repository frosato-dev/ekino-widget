import { createStore, applyMiddleware, combineReducers } from 'redux'
import { wrapStore } from 'react-chrome-redux'
import { routerReducer as router, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'remote-redux-devtools'

import history from './../../core/history'
import reducers from './reducers'
import { portName } from './../../popup/src/config'

/* Not working, try to catch '@@router/LOCATION_CHANGE' to prevent redirecting on re-open
const testRedirect = store => next => action => {

    let _action = action

    if((action.type === '@@router/LOCATION_CHANGE') && (action.payload.pathname === '/') ) {

        console.log('innn')

        _action = {
            ...action,
            payload: {
                ...store.getState().router
            }
        }

        console.log('intercept ?', _action)
    }

    return next(_action)
}
*/

const middleware = [
    //testRedirect,
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
