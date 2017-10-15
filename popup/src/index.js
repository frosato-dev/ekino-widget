import React from 'react'
import { render } from 'react-dom'
import { Store } from 'react-chrome-redux'
import { Provider } from 'react-redux'
import { portName, appId } from './config'

import './index.css'
import Router from './modules/routing'


const proxyStore = new Store({
    portName
})

render(
    <Provider store={proxyStore}>
        <Router />
    </Provider>,
    document.getElementById(appId)
)
