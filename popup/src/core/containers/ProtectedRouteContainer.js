import { connect } from 'react-redux'
import ProtectedRoute from '../components/router/ProtectedRoute'
import { isLoggedInSelector } from '../selectors/index'

const mapStateToProps = (state, ownProps) => {
    const isLoggedIn = isLoggedInSelector(state)
    let isAllowed = isLoggedIn

    // Do more isAllow work

    return {
        isLoggedIn,
        isAllowed
    }
}

export default connect(mapStateToProps)(ProtectedRoute)
