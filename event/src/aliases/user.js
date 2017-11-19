import { getFirebase } from 'react-redux-firebase'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

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
            return getFirebase()
                .login({ ...payload.data })
                .then(() =>
                    dispatch({
                        type: USER_LOGGED_IN,
                        payload: 'ok'
                    })
                )
                .catch(() =>
                    dispatch({
                        type: USER_LOGGED_OUT,
                        payload: 'logout'
                    })
                )
        }
    }
}
