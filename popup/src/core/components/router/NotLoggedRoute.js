import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const NotLoggedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (isLoggedIn) {
                return (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                    />
                )
            }

            return <Component {...props} />
        }}
    />
)

NotLoggedRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

export default NotLoggedRoute
