import { pathToJS } from 'react-redux-firebase'

export default state => pathToJS(state.firebase, 'auth')
