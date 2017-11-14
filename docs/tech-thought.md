# Redux

Since the data are not persistent in `popup.js` file, but they are in the `background.js`, i needed to find a way store the data in the `background.js` and sync them easily between popup and background.

My solution to this problem was to a great library named: [react-chrome-redux](https://github.com/tshaddix/react-chrome-redux).


``
popup/index.js
``
```js
import { render } from 'react-dom'
import { Store } from 'react-chrome-redux'
import { Provider } from 'react-redux'

const proxyStore = new Store({
    portName: 'SOME_NAME'
})

render(
    <Provider store={proxyStore}>
        <Router />
    </Provider>,
    document.getElementById(appId)
)

```

``
event/index.js
``
```js
import { createStore } from 'redux'
import { wrapStore } from 'react-chrome-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer, {})

wrapStore(store, {
    portName: 'SOME_NAME'
})
```

# Routing

## Two options to implement MemoryRouter

### Builtin react-router MemoryRouter
```js
import { MemoryRouter, Switch, Route } from 'react-router'  
import { render } from 'react-dom'

render (
  <MemoryRouter>
    <Switch/>
      <Route .../>
      <Route .../>
    <Switch>
  </MemoryRouter>
)

```


### Custom MemoryRouter
```js
import { createMemoryHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'  
import { render } from 'react-dom'

const history = createMemoryHistory({
  initialEntries: [ '/' ],  // The initial URLs in the history stack
  initialIndex: 0,          // The starting index in the history stack
  keyLength: 6,             // The length of location.key
  // A function to use to confirm navigation with the user. Required
  // if you return string prompts from transition hooks (see below)
  getUserConfirmation: null
})

render (
  <Router history={history}>
    <Switch/>
      <Route .../>
      <Route .../>
    <Switch>
  </MemoryRouter>
)

```

Anyway we loose navigation state when closing the popup !

### How to fix ?


# Debugging

to ease debugging i`ve setup a remote debugger for Redux (the one use with react-native) :
* [remotedev-server](https://github.com/zalmoxisus/remotedev-server)
* [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools#communicate-via-local-server)

## In the code
``package.json``
```json
{
  "scripts": {
    "start": "remotedev & gulp watch",
    "remotedev": "remotedev --hostname=localhost --port=8000"
  }
}
```


``event/index.js``
``` js
import { composeWithDevTools } from 'remote-redux-devtools';


const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
const enhancer = composeEnhancers(
    applyMiddleware([...]),
);

const store = createStore(combineReducers({...reducers}), enhancer)

```

## In Practice

- Go to chrome extensions panel:
- Under your extension go to : `inspect views: background page`
- Click on Redux extension
- Click `Open remote DevTools`
- Setting (at the bottom) > check `Use Custom server` and set `port` to 8000
