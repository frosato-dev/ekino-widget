import React from 'react'
import { render } from 'react-dom'
import { Store } from 'react-chrome-redux'
import { Provider } from 'react-redux'
import { portName, appId } from './config'

import './index.css'
import Router from './modules/routing'


const store = new Store({
    portName
})

store.ready().then(() => {
    render(
        <Provider store={store}>
            <Router store={store}/>
        </Provider>,
        document.getElementById(appId)
    )
});