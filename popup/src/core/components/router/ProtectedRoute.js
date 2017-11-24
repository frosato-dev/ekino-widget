import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router'
import PageNotFound from '../../../core/components/PageNotFound'

const ProtectedRoute = ({
    component: Component,
    forbiddenComponent: Forbidden,
    isLoggedIn,
    isAllowed,
    ...rest
}) => (
    <Route
        {...rest}
        render={props => {
            if (!isLoggedIn) {
                return (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )
            }

            if (!isAllowed) return <Forbidden />

            if (isAllowed) return <Component {...props} />
        }}
    />
)

ProtectedRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    isAllowed: PropTypes.bool.isRequired
}

ProtectedRoute.defaultProps = {
    forbiddenComponent: PageNotFound
}

export default ProtectedRoute
