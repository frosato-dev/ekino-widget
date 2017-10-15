import React from 'react'
import { MemoryRouter, Switch, Route } from 'react-router'

import Home from './home/Home'
import MoodBoard from './moodboard/MoodBoard'
import TimeCapture from './timecapture/TimeCapture'


const getUserConfirmation = (message, callback) => callback(window.confirm(message))

export default () => (
    <MemoryRouter getUserConfirmation={getUserConfirmation}>
        <Switch>
            <Route path="/mood-board" component={MoodBoard} exact/>
            <Route path="/time" component={TimeCapture}/>
            <Route path="/" component={Home}/>
        </Switch>
    </MemoryRouter>

)