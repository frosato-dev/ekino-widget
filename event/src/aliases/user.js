/* eslint-disable no-undef */
import { getFirebase } from 'react-redux-firebase'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

const loginWithChrome = () =>
    new Promise(resolve => {
        // eslint-disable-next-line no-undef
        chrome.identity.getAuthToken({ interactive: true }, token => {
            const credentials = getFirebase().auth.GoogleAuthProvider.credential(null, token)
            resolve(credentials)
        })
    }).then(credentials =>
        getFirebase()
            .auth()
            .signInWithCredential(credentials)
    )

const loginWithCredentials = credentials => getFirebase().login(credentials)

const login = ({ provider, ...credentials }) => {
    switch (provider) {
        case 'google':
            return loginWithChrome()
        default:
            return loginWithCredentials({ ...credentials })
    }
}

export default {
    /**
   *
   * @param payload <Object>
   *  - with google: { provider: 'google' }
   *  - with credentials : {email: 'x', password: 'x' }
   * @returns {function(*)}
   */
    USER_LOGGING_IN: payload => {
        return dispatch => {
            login({ ...payload.data })
                .then(() =>
                    dispatch({
                        type: USER_LOGGED_IN,
                        payload: {}
                    })
                )
                .catch(error =>
                    dispatch({
                        type: USER_LOGGED_OUT,
                        payload: {
                            error
                        }
                    })
                )
        }
    }
}
