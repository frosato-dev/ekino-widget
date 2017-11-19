import { getFirebase } from 'react-redux-firebase'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

export default {
    USER_LOGGING_IN: payload => {
        return dispatch => {
            return getFirebase()
                .login({
                    email: payload.data.email,
                    password: payload.data.password
                })
                .then(() => {
                    return dispatch({
                        type: USER_LOGGED_IN,
                        payload: 'ok'
                    })
                })
                .catch(() => {
                    return dispatch({
                        type: USER_LOGGED_OUT,
                        payload: 'logout'
                    })
                })
        }
    }
}
