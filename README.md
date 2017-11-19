# ChromeExtension with Stack

### Getting started

#### Setup:

```
npm install gulp-cli -g
```

### Getting started

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
├── event (Redux)
│   ├── src
│   │   ├── reducers 
├── popup (React)
│   ├── src
│   │   ├── core (shared)
│   │       ├── components
│   │   ├── modules (specific)
```

### Debug

- Click on Redux Devtools extension
- Click `Open remote DevTools`
- Go to `Settings` (at the bottom)
- Check `Use Custom server` and set `port` to `8000`


### Library 
* [react-chrome-redux](https://github.com/tshaddix/react-chrome-redux)


Based on [react-chrome-redux-example](https://github.com/tshaddix/react-chrome-redux-examples) by [Tyler Shaddix](https://github.com/tshaddix) 

### Notes
* [Good to know](docs/tech-thought.md)
