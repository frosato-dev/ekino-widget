# Redux

Since the data are not persistent in `popup.js` file but they are in the `background.js`, i needed to find a way store the data in the `background.js` and sync them easily every time we open the popup.

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

### Custom
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

### Builtin with react-router

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
