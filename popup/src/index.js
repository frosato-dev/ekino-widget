import React from 'react'
import { render } from 'react-dom'
import { Store } from 'react-chrome-redux'
import { Provider } from 'react-redux'
import config from './config'

import './index.css'
import App from './modules/App/App'


const proxyStore = new Store({
    portName: config.portName
})

render(
    <Provider store={proxyStore}>
        <App />
    </Provider>,
    document.getElementById(config.appId)
)
