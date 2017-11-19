# ChromeExtension with Stack

#### Setup:

```
npm install gulp-cli -g
```

#### Run project:
```
yarn start
```

#### Run storybook:
```
yarn storybook
```

#### Folder structure: 

```
├── core
│   ├── config
├── event
│   ├── src
│   │   ├── aliases (Redux actions)
│   │   ├── reducers
├── popup
│   ├── src
│   │   ├── core (shared)
│   │   ├── modules (specific)
```

### Debug

- Click on Redux Devtools extension
- Click `Open remote DevTools`
- Go to `Settings` (at the bottom)
- Check `Use Custom server` and set `port` to `8000`


### Libraries 
* [react](https://reactjs.org/)
* [redux](https://redux.js.org/)
* [redux-thunk](https://github.com/gaearon/redux-thunk)
* [react-chrome-redux](https://github.com/tshaddix/react-chrome-redux)
* [styled-components](https://github.com/styled-components/styled-components)
* [react-redux-firebase](https://github.com/prescottprue/react-redux-firebase)


based on [react-chrome-redux-example](https://github.com/tshaddix/react-chrome-redux-examples) by [Tyler Shaddix](https://github.com/tshaddix) 

### Notes
* [Good to know](docs/tech-thought.md)
