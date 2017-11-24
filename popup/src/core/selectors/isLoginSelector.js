import { isLoaded, pathToJS } from 'react-redux-firebase'

export default state => {
    const auth = pathToJS(state.firebase, 'auth')
    return !isLoaded(auth)
}
