import React from 'react'
import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import history from './../../../core/history'

import Home from './home/Home'
import MoodBoard from './moodboard/MoodBoard'
import TimeCapture from './timecapture/TimeCapture'


export default () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route path="/mood-board" component={MoodBoard} exact/>
            <Route path="/time" component={TimeCapture}/>
            <Route path="/" component={Home}/>
        </Switch>
    </ConnectedRouter>

)