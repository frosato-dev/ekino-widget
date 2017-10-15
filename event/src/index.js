import { createStore } from 'redux'
import { wrapStore } from 'react-chrome-redux'
import rootReducer from './reducers'
import config from './../../popup/src/config'

const store = createStore(rootReducer, {})

wrapStore(store, {
    portName: config.portName
})
