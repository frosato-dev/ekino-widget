import React from 'react'
import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import history from './../../../core/history'

import Login from './auth/Login'
import Home from './home/Home'
import MoodBoard from './moodboard/MoodBoard'
import TimeCapture from './timecapture/TimeCapture'

// Push hack from action
// https://github.com/tshaddix/react-chrome-redux/issues/39

// syncHistoryWithStore does not respect redux state
// https://github.com/reactjs/react-router-redux/issues/534

export default ({ store }) => {

    // Redirect to last path before closing
    const location = store.getState().router.location
    if(location) history.replace(location.pathname)

    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/mood-board" component={MoodBoard} exact/>
                <Route path="/time" component={TimeCapture}/>
                <Route path="/" component={Login}/>
            </Switch>
        </ConnectedRouter>
    )
}